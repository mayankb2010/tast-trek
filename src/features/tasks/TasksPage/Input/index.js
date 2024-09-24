import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: 2px solid hsl(0, 0%, 84%);
  width: 100%;

  ${({ search }) =>
    search &&
    css`
      border-right: none;
    `}
`;
