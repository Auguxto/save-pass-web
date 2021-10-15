import { useContext } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Passwords from "../../components/Passwords";
import Preview from "../../components/Preview";

import { UserContext } from "../../contexts/UserContext";

import * as S from "./styles.app";

const App = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <S.Container>
      <Navbar />
      <Passwords />
      <Preview />
    </S.Container>
  );
};

export default App;
