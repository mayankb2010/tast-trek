import styled from "styled-components";
import { MdClear } from "react-icons/md";

export const SearchFlex = styled.div`
  display: flex;
`;

export const ClearIcon = styled(MdClear)`
  width: 30px;
  height: 30px;
`;

export const ClearInput = styled.button`
  color: ${({ theme }) => theme.colors.doveGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -0.5px;
  border: 2px solid hsl(0, 0%, 84%);
  border-left: none;
  background-color: transparent;
  width: 40px;
  cursor: pointer;
  transition: color 80ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
