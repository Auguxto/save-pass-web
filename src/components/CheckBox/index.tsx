import React from "react";
import { FiCheck } from "react-icons/fi";

import * as S from "./styles.checkbox";

type CheckBoxProps = {
  width: string;
  height: string;
  checked: boolean;
  onClick: () => void;
};

const CheckBox = ({ width, height, checked, onClick }: CheckBoxProps) => {
  return (
    <S.Container onClick={onClick} width={width} height={height}>
      {checked && <FiCheck color="#165DDB" size={20} />}
    </S.Container>
  );
};

export default CheckBox;
