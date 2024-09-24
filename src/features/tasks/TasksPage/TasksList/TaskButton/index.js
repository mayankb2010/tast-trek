import styled, { css } from "styled-components";
import checkMark from "../images/check.png";
import removeMark from "../images/delete.png";

export const TaskButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.teal};
  transition: opacity 150ms;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }

  ${({ done }) =>
    done &&
    css`
      background-image: url(${checkMark});
      background-size: cover;
      background-position: center;
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-image: url(${removeMark});
      background-size: cover;
      background-position: center;
    `}
`;
