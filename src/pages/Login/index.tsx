import React, { useReducer } from "react";
import CheckBox from "../../components/CheckBox";

import * as S from "./styles.login";

const Login = () => {
  const [rememberMe, toggleRememberMe] = useReducer((s) => !s, false);

  return (
    <S.Container>
      <S.Form>
        <S.Title>savePass</S.Title>
        <S.InputsContainer>
          <S.Input type="text" placeholder="Email" />
          <S.Input type="password" placeholder="Password" />
          <S.RememberOrForgot>
            <S.RememberContainer>
              <CheckBox
                checked={rememberMe}
                onClick={toggleRememberMe}
                width="20px"
                height="20px"
              />
              <S.RememberText>Remember-me</S.RememberText>
            </S.RememberContainer>
            <S.ForgotPassword to="/forgotPassword">
              forgot password?
            </S.ForgotPassword>
          </S.RememberOrForgot>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <S.SigninButton>Sign in</S.SigninButton>
          <S.GoogleSigninButton>
            <S.GoogleIcon />
            Sign in with Google
          </S.GoogleSigninButton>
        </S.ButtonsContainer>
        <S.Footer>
          <S.CreateAccount to="/register">
            don't have an account?
          </S.CreateAccount>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default Login;
