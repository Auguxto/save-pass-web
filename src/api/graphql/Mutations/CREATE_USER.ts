import { gql } from "@apollo/client";

export type CreateUserData = {
  createUser: {
    id: string;
    email: string;
    __typename: string;
  };
};

export type CreateUserVars = {
  email: string;
  password: string;
};

const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
      email
    }
  }
`;

export default CREATE_USER;
