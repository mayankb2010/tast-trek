import styled, { css } from "styled-components";
import { Button } from "../../../common/Button";
import { FiEdit } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export const EditButton = styled(Button)`
  margin-right: auto;
`;

export const EditIcon = styled(FiEdit)`
  color: #1b4332;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  transition: all 100ms ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

export const EditTaskMessage = styled.p`
  font-size: 18px;
  margin: 0 0 20px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  padding: 0;
  background-color: transparent;
  color: grey;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 100ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hibiscus};
  }
`;

export const CloseButtonIcon = styled(IoIosClose)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:focus {
    outline: 1px solid teal;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: darkred;
  margin: 3px 0 0;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  top: 122px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 100ms ease-in-out;

  ${({ error }) =>
    error &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;
