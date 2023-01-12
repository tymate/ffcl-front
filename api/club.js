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

export const GET_CLUBS = gql`
  query clubs {
    clubs(first: 0) {
      nodes {
        id
        label
      }
    }
  }
`;
