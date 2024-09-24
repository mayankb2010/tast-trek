import styled from "styled-components";
import { SaveButton } from "../SaveButton";

export const NoteSaveButton = styled(SaveButton)`
  position: relative;

  &:disabled {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.rose};
    color: #414141;
    cursor: auto;
  }
`;
