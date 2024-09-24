import styled, { css } from "styled-components";
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Heading = styled.h1`
  display: inline-block;

  ${({ inHome }) =>
    inHome &&
    css`
      text-align: center;
    `}
`;

export const GoBackLink = styled(Link)`
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 20px;
`;

export const GoBackIcon = styled(IoReturnUpBack)`
  width: 30px;
  height: 30px;
  color: #1b4332;
  transition: all 100ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
    transform: translateX(-3px);
  }
`;
