import styled from "styled-components";
import { Link } from "react-router-dom";

import googleIcon from "../../assets/components/signinGoogleButton/google.png";

export const Container = styled.div`
  display: flex;
  flex: 1;

  height: 100vh;

  align-items: center;
  justify-content: center;

  background: #1e1e1e;
`;

export const Form = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 600px;
  height: 700px;

  background: #282828;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
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

  margin-top: 50px;
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

  margin-bottom: 10px;

  cursor: pointer;

  font-family: Inter;
  font-size: 20px;

  color: #282828;
`;
