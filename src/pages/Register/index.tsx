import React from "react";

import * as S from "./styles.register";

const Register = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Title>savePass</S.Title>
        <S.InputsContainer>
          <S.Input type="text" placeholder="Email" />
          <S.Input type="password" placeholder="Password" />
          <S.Input type="password" placeholder="Confirm Password" />
          <S.HaveAccount>
            <S.ForgotPassword to="/login">have an account?</S.ForgotPassword>
          </S.HaveAccount>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <S.SigninButton>Sign up</S.SigninButton>
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
