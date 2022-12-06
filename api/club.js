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
