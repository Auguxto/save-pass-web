import React, { useReducer } from "react";
import { FiStar, FiEye, FiEyeOff, FiCopy } from "react-icons/fi";

import * as S from "./styles.preview";

const Preview = () => {
  const [favorite, toggleFavorite] = useReducer((s) => !s, true);
  const [passwordView, togglePasswordView] = useReducer((s) => !s, false);

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <S.Container>
      <S.Header>
        <S.PasswordIcon />
        <S.PasswordDesc>
          <S.PasswordName>Facebook</S.PasswordName>
          <S.PasswordType>Login</S.PasswordType>
        </S.PasswordDesc>
        <S.PasswordFavorite onClick={toggleFavorite}>
          <FiStar color={favorite ? "#FDBF61" : "#515151"} size={20} />
        </S.PasswordFavorite>
      </S.Header>
      <S.PasswordEnter>
        <S.PasswordEnterText>Username / Email / Telephone</S.PasswordEnterText>
        <S.PasswordEnterValue>
          victoraugusferreira@gmail.com
        </S.PasswordEnterValue>
      </S.PasswordEnter>
      <S.PasswordValueWrapper>
        <S.PasswordValueDesc>
          <S.PasswordValueText>Password</S.PasswordValueText>
          <S.PasswordValueInput
            disabled
            spellCheck="false"
            type={passwordView ? "text" : "password"}
            value="938274902874829"
          />
        </S.PasswordValueDesc>
        <S.PasswordFunctions>
          <S.PasswordFunction onClick={togglePasswordView}>
            {passwordView && <FiEyeOff color="#747474" size={24} />}
            {!passwordView && <FiEye color="#747474" size={24} />}
          </S.PasswordFunction>
          <S.PasswordFunction onClick={() => copyToClipboard("victoraugusto")}>
            <FiCopy color="#747474" size={24} />
          </S.PasswordFunction>
        </S.PasswordFunctions>
      </S.PasswordValueWrapper>
      <S.PasswordNote>
        <S.PasswordNoteText>Note</S.PasswordNoteText>
        <S.PasswordNoteValue>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consequatur magnam ratione inventore ut nulla! Tempora, repellendus
          suscipit. Reprehenderit dolorem atque nostrum ipsa possimus illum
          ratione corporis laudantium commodi dolor.
        </S.PasswordNoteValue>
      </S.PasswordNote>
    </S.Container>
  );
};

export default Preview;
