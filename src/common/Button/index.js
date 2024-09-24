import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: teal;
  transition: color 150ms;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightTeal};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
    cursor: auto;

    ${({ error }) =>
      error &&
      css`
        color: #b76b6b;
      `};
  }

  ${({ remove }) =>
    remove &&
    css`
      color: ${({ theme }) => theme.colors.hibiscus};

      &:hover {
        color: ${({ theme }) => theme.colors.rose};
      }
    `}

  ${({ strong }) =>
    strong &&
    css`
      font-weight: 700;
    `}
`;
