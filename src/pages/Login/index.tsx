/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@apollo/client";
import { Eye, EyeOff } from "lucide-react";
import { useReducer, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";

import CREATE_SESSION, {
  CreateSessionData,
  CreateSessionVars,
} from "../../api/graphql/Mutations/CREATE_SESSION";

import CheckBox from "../../components/CheckBox";
import { UserContext } from "../../contexts/UserContext";

import * as S from "./styles.login";

type LoginProps = {
  location?: {
    state: {
      email: string;
      password: string;
    };
  };
};

const Login = ({ location }: LoginProps) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, toggleRememberMe] = useReducer((s) => !s, false);
  const [viewPassword, toggleViewPassword] = useReducer((s) => !s, false);

  const { user, setUser } = useContext(UserContext);

  const [createSession] = useMutation<CreateSessionData, CreateSessionVars>(
    CREATE_SESSION,
    {
      variables: { email, password },
      onCompleted: (data) => {
        setUser(data.createSession.token);
        if (rememberMe) localStorage.setItem("token", data.createSession.token);
        console.log(data.createSession.token);
      },
    }
  );

  useEffect(() => {
    if (user) {
      history.push("/app");
    }
  }, [user]);

  useEffect(() => {
    if (location?.state) {
      setEmail(location.state.email);
      setPassword(location.state.password);
    }
  }, [location]);

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
          <S.SigninButton onClick={() => createSession()}>
            Sign in
          </S.SigninButton>
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
