import { gql } from "@apollo/client";

export const CREATE_CLUB = gql`
  mutation createClub($input: CreateClubInput!) {
    createClub(input: $input) {
      club {
        id
        label
        description
        invitationCode
      }
    }
  }
`;

export const JOIN_CLUB = gql`
  mutation joinClub($input: JoinClubInput!) {
    joinClub(input: $input) {
      club {
        id
      }
    }
  }
`;

export const DELETE_CLUB = gql`
  mutation deleteClub($input: DeleteClubInput!) {
    deleteClub(input: $input) {
      errors {
        error
        message
      }
    }
  }
`;

export const UPDATE_CLUB = gql`
  mutation updateClub($input: UpdateClubInput!) {
    updateClub(input: $input) {
      club {
        id
        label
        description
      }
    }
  }
`;

export const GET_CLUBS = gql`
  query currentUser($cursor: String) {
    currentUser {
      id
      clubs(after: $cursor, first: 5) {
        edges {
          node {
            admin {
              id
              username
            }
            users {
              totalCount
            }
            id
            label
            description
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
        totalCount
      }
    }
  }
`;

export const GET_CLUB = gql`
  query club($id: ID!) {
    club(id: $id) {
      id
      invitationCode
      label
      description
      users {
        nodes {
          id
          username
        }
        totalCount
      }
      admin {
        id
        username
      }
    }
  }
`;
