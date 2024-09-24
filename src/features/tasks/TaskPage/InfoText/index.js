import styled from "styled-components";

export const InfoText = styled.span`
  color: ${({ theme }) => theme.colors.doveGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-self: flex-start;
  }
`;
