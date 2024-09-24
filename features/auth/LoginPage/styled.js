import styled from "styled-components";

export const Text = styled.div`
  text-align: start;
  margin-top: 6px;

  a {
    color: ${({ theme }) => theme.colors.doveGrey};
    text-decoration: none;
    transition: all 100ms ease-in-out;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
