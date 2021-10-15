import { gql } from "@apollo/client";

export type CreateSessionData = {
  createSession: {
    token: string;
    __typename: string;
  };
};

export type CreateSessionVars = {
  email: string;
  password: string;
};

const CREATE_SESSION = gql`
  mutation CreateSession($email: String!, $password: String!) {
    createSession(email: $email, password: $password) {
      token
    }
  }
`;

export default CREATE_SESSION;
