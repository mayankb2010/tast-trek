import styled from "styled-components";

export const FlexWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({ theme }) => theme.colors.lightTeal};
    text-decoration: none;
    transition: all 100ms ease-in-out;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
