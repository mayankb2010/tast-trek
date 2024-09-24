import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";

export const Form = styled.form`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkTeal};
  transition: all 80ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AddFile = styled(BsPlusCircle)`
  display: inline-block;
  font-size: 30px;
  cursor: pointer;
`;

export const AddFileInput = styled.input`
  display: none;
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.rose};
`;
