import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.teal};
  color: white;
  transition: opacity 200ms ease-in-out;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
  &:active {
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    &:hover {
      transform: scale(1);
    }
  }
`;
