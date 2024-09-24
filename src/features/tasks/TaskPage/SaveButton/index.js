import styled from "styled-components";

export const SaveButton = styled.button`
  margin-top: 32px;
  padding: 10px 15px;
  width: 100%;
  border: none;
  font-weight: 700;
  letter-spacing: 0.5px;
  white-space: nowrap;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  cursor: pointer;
  transition: all 100ms ease-out;

  &:hover {
    color: #414141;
    background-color: transparent;
  }
`;
