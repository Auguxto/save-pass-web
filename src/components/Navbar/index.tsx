import React, { useState } from "react";
import { FiShield, FiStar, FiTrash2, FiPlus, FiLogOut } from "react-icons/fi";

import * as S from "./styles.navbar";

const Navbar = () => {
  const [filter, setFilter] = useState("all");

  return (
    <S.Navbar>
      <S.FiltersContainer>
        <S.Filter
          active={filter === "all" ? true : false}
          onClick={() => setFilter("all")}
        >
          <FiShield color="#FFFFFF" size={20} />
          All items
          <S.FilterAmount>7</S.FilterAmount>
        </S.Filter>
        <S.Filter
          active={filter === "favorites" ? true : false}
          onClick={() => setFilter("favorites")}
        >
          <FiStar color="#FDBF61" size={20} />
          Favorites
          <S.FilterAmount>2</S.FilterAmount>
        </S.Filter>
        <S.Filter
          active={filter === "trash" ? true : false}
          onClick={() => setFilter("trash")}
        >
          <FiTrash2 color="#E84A5F" size={20} />
          Trash
          <S.FilterAmount>0</S.FilterAmount>
        </S.Filter>
      </S.FiltersContainer>
      <S.Types>
        <S.TypesText>Types</S.TypesText>
        <S.Type>
          <S.LoginIcon />
          Login
        </S.Type>
        <S.Type>
          <S.CardIcon />
          Card
        </S.Type>
        <S.Type>
          <S.NoteIcon />
          Note
        </S.Type>
      </S.Types>
      <S.Folders>
        <S.FoldersText>Folders</S.FoldersText>
        <S.Folder>
          <S.FolderIcon /> Work
        </S.Folder>
        <S.Folder>
          <S.FolderIcon /> Social
        </S.Folder>
        <S.Folder>
          <S.FolderIcon /> Personal
        </S.Folder>
      </S.Folders>
      <S.Footer>
        <S.NewFolder>
          <FiPlus color="#9F9F9F" size={30} />
          New folder
        </S.NewFolder>
        <S.Logout>
          <FiLogOut color="#9F9F9F" size={30} />
          Logout
        </S.Logout>
      </S.Footer>
    </S.Navbar>
  );
};

export default Navbar;
