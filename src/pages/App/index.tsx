import React from "react";

import Navbar from "../../components/Navbar";
import Passwords from "../../components/Passwords";
import Preview from "../../components/Preview";

import * as S from "./styles.app";

const App = () => {
  return (
    <S.Container>
      <Navbar />
      <Passwords />
      <Preview />
    </S.Container>
  );
};

export default App;
