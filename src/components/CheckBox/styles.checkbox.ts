import styled from "styled-components";

export const Container = styled.button<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: #404040;

  border: none;
  border-radius: 5px;

  :hover {
    filter: brightness(0.8);
  }
`;
