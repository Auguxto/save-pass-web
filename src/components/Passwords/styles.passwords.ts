import styled from "styled-components";

import facebook from "../../assets/icons/facebook.png";

export const Container = styled.div`
  display: flex;

  user-select: none;

  align-items: center;

  flex-direction: column;

  width: 30%;
  height: 100vh;

  background: #1e1e1e;

  border-right: 2px solid #161616;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #282828;
  }
`;

export const SearchContainer = styled.div`
  display: flex;

  flex-direction: row;

  justify-content: space-between;

  width: 90%;
  height: 40px;

  margin-top: 30px;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  width: 80%;

  flex-direction: row;

  align-items: center;

  padding: 0 20px;

  background: #404040;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  display: flex;

  flex-direction: row;

  width: 100%;

  padding-left: 20px;

  background: #404040;

  border: none;
  border-radius: 10px;

  font-family: Roboto;
  font-size: 16px;

  color: #797979;
`;

export const SearchButton = styled.button`
  display: flex;

  width: 45px;
  height: 40px;

  align-items: center;
  justify-content: center;

  background: #165ddb;

  border: none;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;

export const PasswordsContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;

  margin-top: 30px;
`;

export const PasswordWrapper = styled.div<{ active?: boolean }>`
  display: flex;

  flex-direction: row;

  width: 90%;
  height: 100px;

  background: ${(props) => (props.active ? "#165ddb" : "transparent")};
  border-radius: 10px;

  margin-bottom: 20px;

  cursor: pointer;

  overflow: hidden;

  :hover {
    background: ${(props) => (props.active ? "#165ddb" : "#282828")};
  }
`;

export const PassswordIcon = styled.img.attrs({
  src: facebook,
})`
  width: 60px;
  height: 60px;

  border-radius: 10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  margin: 20px;
`;

export const PasswordDescripton = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  margin: 20px 0;
`;

export const PasswordName = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;

  color: #ffffff;
`;

export const PasswordEnter = styled.p<{ active?: boolean }>`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => (props.active ? "#709ded" : "#8F8F8F")};
`;

export const Text = styled.p``;
