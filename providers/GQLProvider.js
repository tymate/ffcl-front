import React, { useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  Observable,
} from "@apollo/client";
import { onError } from "apollo-link-error";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import { includes } from "lodash";
import { relayStylePagination } from "@apollo/client/utilities";
import { AuthContext } from "./AuthProvider";
import { refreshToken } from "../api/auth";
import { BASE_URL } from "../api/base";

export const promiseToObservable = (promise) =>
  new Observable((subscriber) => {
    promise.then(
      (value) => {
        if (subscriber.closed) {
          return;
        }
        subscriber.next(value);
        subscriber.complete();
      },
      (err) => {
        subscriber.error(err);
      }
    );
    return subscriber;
  });

const GraphQLProvider = ({ children }) => {
  const {
    accessToken,
    refreshToken: refreshTokenValue,
    setToken,
    deleteToken,
  } = useContext(AuthContext);

  const uploadLink = createUploadLink({
    uri: `${BASE_URL}/graphql`,
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: Boolean(accessToken) ? `Bearer ${accessToken}` : "",
    },
  }));

  const refreshTokenLink = onError(({ graphQLErrors, forward, operation }) => {
    if (!Boolean(refreshTokenValue)) {
      return;
    }
    if (
      includes(
        (graphQLErrors || []).map(
          (graphQLError) => graphQLError?.extensions?.code
        ),
        "unauthorized"
      )
    ) {
      return promiseToObservable(refreshToken(refreshTokenValue)).flatMap(
        ({ data }) => {
          const { accessToken } = data;
          setToken(data);
          operation.setContext((_, { headers }) => ({
            headers: {
              ...headers,
              authorization: Boolean(accessToken)
                ? `Bearer ${accessToken}`
                : "",
            },
          }));
          return forward(operation);
        },
        () => {
          deleteToken();
          return forward(operation);
        }
      );
    }

    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([authLink, refreshTokenLink, uploadLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            clubs: relayStylePagination(),
          },
        },
      },
    }),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
