import { gql } from "@apollo/client";

export const CREATE_SESSION = gql`
  mutation createReadingSession($input: CreateReadingSessionInput!) {
    createReadingSession(input: $input) {
      readingSession {
        id
        name
        readDueDate
        submissionDueDate
      }
    }
  }
`;
