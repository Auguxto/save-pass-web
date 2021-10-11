import styled from "styled-components";
import { Link } from "react-router-dom";

import googleIcon from "../../assets/components/signinGoogleButton/google.png";

export const Container = styled.div`
  display: flex;
  flex: 1;

  width: auto;
  min-width: 100%;
  height: auto;
  min-height: 100vh;

  align-items: center;
  justify-content: center;

  background: #1e1e1e;
`;

export const Form = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: auto;
  max-width: 600px;
  min-width: 31.2%;
  height: auto;
  min-height: 75%;

  background: #282828;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  @media (max-width: 420px) {
    width: 100%;
    height: auto;
    min-height: 100vh;

    border-radius: 0px;
  }
`;

export const Title = styled.p`
  font-family: Inter;
  font-size: 36px;
  font-weight: 100;

  color: #ffffff;

  margin-top: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;

  width: 80%;

  flex-direction: column;

  margin-top: 106px;
`;

export const Input = styled.input`
  width: 100%;

  height: 60px;

  background: #404040;

  border: none;
  border-radius: 10px;

  padding-left: 10px;

  margin-bottom: 20px;

  font-family: Roboto;
  font-size: 16px;

  color: #797979;
`;

export const HaveAccount = styled.div`
  display: flex;

  flex-direction: row;

  align-items: center;
  justify-content: flex-end;

  padding: 10px;
`;

export const ForgotPassword = styled(Link)`
  font-family: Inter;
  font-size: 16px;

  text-decoration: none;

  color: #165ddb;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  width: 80%;

  flex-direction: column;

  margin: 30px 0;
`;

export const SigninButton = styled.button`
  display: flex;

  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;

  background: #165ddb;

  border: none;
  border-radius: 10px;

  margin-bottom: 10px;

  cursor: pointer;

  font-family: Inter;
  font-size: 20px;

  color: #ffffff;
`;

export const GoogleIcon = styled.img.attrs({
  src: googleIcon,
})`
  width: 40px;
  height: 40px;
`;

export const GoogleSigninButton = styled.div`
  display: flex;

  gap: 20px;

  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;

  background: #ffffff;

  border: none;
  border-radius: 10px;

  margin-bottom: 20px;

  cursor: pointer;

  font-family: Inter;
  font-size: 20px;

  color: #282828;
`;
