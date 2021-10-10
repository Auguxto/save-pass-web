import styled from "styled-components";

import loginIcon from "../../assets/components/navBar/types/login.svg";
import cardIcon from "../../assets/components/navBar/types/card.svg";
import noteIcon from "../../assets/components/navBar/types/note.svg";
import folderIcon from "../../assets/components/navBar/folder/folder.svg";

export const Navbar = styled.div`
  display: flex;

  align-items: center;

  flex-direction: column;

  width: 20%;
  height: 100vh;

  background: #282828;

  border-right: 2px solid #161616;
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 90%;

  flex-direction: column;

  margin-top: 50px;
`;

export const FilterAmount = styled.p`
  position: absolute;
  right: 10px;

  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;

  color: #484848;
`;

export const Filter = styled.button<{ active?: boolean }>`
  display: flex;

  background: ${(props) => (props.active ? "#165ddb" : "transparent")};
  ${FilterAmount} {
    color: ${(props) => (props.active ? "#ffffff" : "#484848")};
  }

  user-select: none;

  position: relative;

  flex-direction: row;

  align-items: center;

  gap: 10px;

  width: 100%;
  height: 30px;

  border: none;
  border-radius: 5px;

  padding: 0 10px;
  margin-bottom: 2px;

  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;

  color: #ffffff;

  cursor: pointer;

  :hover {
    background: #165ddb;
    ${FilterAmount} {
      color: #ffffff;
    }
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-start;

  user-select: none;

  margin: 20px 0 0 20px;
`;

export const TypesText = styled.p`
  font-family: Roboto;
  font-size: 16px;

  color: #524f4f;

  margin-bottom: 20px;
`;

export const LoginIcon = styled.img.attrs({
  src: loginIcon,
})``;

export const CardIcon = styled.img.attrs({
  src: cardIcon,
})``;

export const NoteIcon = styled.img.attrs({
  src: noteIcon,
})``;

export const Type = styled.button`
  display: flex;

  align-items: center;

  background: transparent;
  border: none;

  gap: 10px;

  margin-left: 10px;
  margin-bottom: 15px;

  cursor: pointer;

  font-family: Roboto;
  font-size: 15px;

  color: #ffffff;

  :hover {
    filter: brightness(0.7);
  }
`;

export const Folders = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  align-self: flex-start;

  user-select: none;

  margin: 20px 0 0 20px;
`;

export const FoldersText = styled.p`
  font-family: Roboto;
  font-size: 16px;

  color: #524f4f;

  margin-bottom: 20px;
`;

export const FolderIcon = styled.img.attrs({
  src: folderIcon,
})``;

export const Folder = styled.button`
  display: flex;

  align-items: center;

  background: transparent;
  border: none;

  gap: 10px;

  margin-left: 10px;
  margin-bottom: 15px;

  cursor: pointer;

  font-family: Roboto;
  font-size: 15px;

  color: #ffffff;

  :hover {
    filter: brightness(0.7);
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 90%;

  user-select: none;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const NewFolder = styled.button`
  display: flex;

  align-items: center;

  gap: 10px;

  background: transparent;
  border: none;

  font-family: Roboto;
  font-size: 15px;

  color: #ffffff;

  cursor: pointer;

  :hover {
    filter: brightness(0.7);
  }
`;

export const Logout = styled.button`
  display: flex;

  align-items: center;

  gap: 10px;

  background: transparent;
  border: none;

  font-family: Roboto;
  font-size: 15px;

  color: #ffffff;

  cursor: pointer;

  :hover {
    filter: brightness(0.7);
  }
`;
