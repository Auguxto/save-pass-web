import React from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

import * as S from "./styles.passwords";

const Passwords = () => {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInputWrapper>
          <FiSearch color="#797979" size={30} />
          <S.SearchInput type="text" placeholder="Search" />
        </S.SearchInputWrapper>
        <S.SearchButton>
          <FiPlus color="#FFFFFF" size={20} />
        </S.SearchButton>
      </S.SearchContainer>
      <S.PasswordsContainer>
        <S.PasswordWrapper active>
          <S.PassswordIcon />
          <S.PasswordDescripton>
            <S.PasswordName>Facebook</S.PasswordName>
            <S.PasswordEnter active>
              victoraugusferreira@gmail.com
            </S.PasswordEnter>
          </S.PasswordDescripton>
        </S.PasswordWrapper>
        <S.PasswordWrapper>
          <S.PassswordIcon />
          <S.PasswordDescripton>
            <S.PasswordName>Facebook</S.PasswordName>
            <S.PasswordEnter>victoraugusferreira@gmail.com</S.PasswordEnter>
          </S.PasswordDescripton>
        </S.PasswordWrapper>
      </S.PasswordsContainer>
    </S.Container>
  );
};

export default Passwords;
