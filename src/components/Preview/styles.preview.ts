import styled from "styled-components";

import facebook from "../../assets/icons/facebook2.png";

export const Container = styled.div`
  display: flex;

  user-select: none;

  flex-direction: column;

  width: 40%;

  margin: 50px auto;
`;

export const Header = styled.div`
  display: flex;

  flex-direction: row;

  padding: 10px;

  border-bottom: 2px solid #515151;
`;

export const PasswordIcon = styled.img.attrs({
  src: facebook,
})`
  width: 95px;
  height: 95px;

  border-radius: 10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const PasswordDesc = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  justify-content: space-between;

  margin-left: 20px;
`;

export const PasswordName = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;

  color: #ffffff;
`;

export const PasswordType = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;

  color: #515151;
`;

export const PasswordFavorite = styled.button`
  display: flex;

  align-self: center;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  border: none;
  background: transparent;

  cursor: pointer;
`;

export const PasswordEnter = styled.div`
  display: flex;

  gap: 12px;

  flex-direction: column;

  margin: 50px 20px;
`;

export const PasswordEnterText = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;

  color: #515151;
`;

export const PasswordEnterValue = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;

  color: #ffffff;
`;

export const PasswordValueWrapper = styled.div`
  display: flex;

  flex-direction: row;

  width: 100%;
  height: 100px;

  background: #292929;
  border-radius: 10px;
`;

export const PasswordValueDesc = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  justify-content: space-between;

  margin: 20px;
`;

export const PasswordValueText = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;

  color: #747474;
`;

export const PasswordValueInput = styled.input`
  border: none;
  background: transparent;

  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;

  color: #ffffff;
`;

export const PasswordFunctions = styled.div`
  display: flex;

  flex-direction: row;

  align-items: center;

  margin-right: 20px;

  gap: 10px;
`;

export const PasswordFunction = styled.button`
  display: flex;

  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;

  border: none;
  background: transparent;

  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;

export const PasswordNote = styled.div`
  display: flex;

  gap: 12px;

  flex-direction: column;

  margin: 50px 20px;
`;

export const PasswordNoteText = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;

  color: #515151;
`;

export const PasswordNoteValue = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;

  color: #ffffff;
`;
