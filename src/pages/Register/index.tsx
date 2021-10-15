/* eslint-disable react-hooks/rules-of-hooks */
import validator from "validator";
import { useHistory } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { useMutation } from "@apollo/client";
import { useReducer, useState } from "react";

import * as S from "./styles.register";

import CREATE_USER, {
  CreateUserData,
  CreateUserVars,
} from "../../api/graphql/Mutations/CREATE_USER";

const Register = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [viewPassword, toggleViewPassword] = useReducer((s) => !s, false);
  const [viewConfirmPassword, toggleViewConfirmPassword] = useReducer(
    (s) => !s,
    false
  );

  const [createUser] = useMutation<CreateUserData, CreateUserVars>(
    CREATE_USER,
    {
      variables: { email, password },
      errorPolicy: "ignore",
      onCompleted: (data) => {
        history.push("/login", { email, password });
      },
    }
  );

  async function handleSubmit() {
    const isEmail = validator.isEmail(email);
    const isStrongPassword = validator.isStrongPassword(password, {
      minLength: 3,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
    });
    const passwordMatch = password === confirmPassword;
    if (isEmail && isStrongPassword && passwordMatch) {
      createUser();
    } else {
      console.log("Invalid params");
    }
  }

  return (
    <S.Container>
      <S.Form>
        <S.Title>savePass</S.Title>
        <S.InputsContainer>
          <S.Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <S.InputGroupContainer>
            <S.InputGroup
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={viewPassword ? "text" : "password"}
              placeholder="Password"
            />
            {!viewPassword && (
              <S.InputGroupButton onClick={toggleViewPassword}>
                <Eye color="#797979" size={24} />
              </S.InputGroupButton>
            )}
            {viewPassword && (
              <S.InputGroupButton onClick={toggleViewPassword}>
                <EyeOff color="#797979" size={24} />
              </S.InputGroupButton>
            )}
          </S.InputGroupContainer>
          <S.InputGroupContainer>
            <S.InputGroup
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={viewConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />
            {!viewConfirmPassword && (
              <S.InputGroupButton onClick={toggleViewConfirmPassword}>
                <Eye color="#797979" size={24} />
              </S.InputGroupButton>
            )}
            {viewConfirmPassword && (
              <S.InputGroupButton onClick={toggleViewConfirmPassword}>
                <EyeOff color="#797979" size={24} />
              </S.InputGroupButton>
            )}
          </S.InputGroupContainer>
          <S.HaveAccount>
            <S.ForgotPassword to="/login">have an account?</S.ForgotPassword>
          </S.HaveAccount>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <S.SigninButton onClick={handleSubmit}>Sign up</S.SigninButton>
          <S.GoogleSigninButton>
            <S.GoogleIcon />
            Sign up with Google
          </S.GoogleSigninButton>
        </S.ButtonsContainer>
      </S.Form>
    </S.Container>
  );
};

export default Register;
