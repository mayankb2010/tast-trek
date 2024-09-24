import styled from "styled-components";

export const DateInput = styled.input`
  max-width: 200px;
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.doveGrey};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.teal};
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.doveGrey};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    margin-bottom: 10px;
  }
`;
