import styled, { css } from "styled-components";

const Container = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 40px 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding-top: 70px;
  }

  ${({ narrow }) =>
    narrow &&
    css`
      max-width: 900px;
    `}

  ${({ auth }) =>
    auth &&
    css`
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export default Container;
