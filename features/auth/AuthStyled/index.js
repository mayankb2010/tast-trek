import styled, { css } from "styled-components";

export const AuthSection = styled.section`
  max-width: 350px;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 0px 20px #c2d5d5;
  border-radius: 5px;
  background-color: white;
`;

export const AuthHeading = styled.h2`
  margin: 0 0 20px;
  font-size: 28px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AuthInput = styled.input`
  padding: 10px 5px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:valid {
    border-color: ${({ theme }) => theme.colors.teal};
  }
`;

export const AuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.teal};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.teal};
  color: white;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 180ms ease-in-out;

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.teal};
  }

  ${({ google }) =>
    google &&
    css`
      margin-top: 20px;
      background-color: ${({ theme }) => theme.colors.orange};
      border: 2px solid ${({ theme }) => theme.colors.orange};

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
      }
    `}
`;

export const AuthMessage = styled.p`
  margin: 12px 0 0;
  color: ${({ theme }) => theme.colors.doveGrey};

  a {
    color: ${({ theme }) => theme.colors.teal};
    font-weight: 700;
    text-decoration: none;
    transition: all 100ms ease-in-out;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
