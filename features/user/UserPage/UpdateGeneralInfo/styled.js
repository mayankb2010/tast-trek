import styled, { css } from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "../../../../common/Button";

export const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 20px;
  }
`;

export const UpdateGrid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const AddIcon = styled(AiOutlinePlusCircle)`
  display: block;
  position: absolute;
  font-size: 60px;
  color: #fff;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 160ms ease-in-out;
  cursor: pointer;
`;

export const ShadowBackdrop = styled.div`
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0px 0px 20px 20px rgba(34, 34, 34, 0.43);
  background-color: rgba(0, 0, 0, 0.23);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  transition: opacity 160ms ease-in-out;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #a4a4a4;
  overflow: hidden;
  margin: 0 auto;

  &:hover ${AddIcon} {
    opacity: 1;
  }

  &:hover ${ShadowBackdrop} {
    opacity: 1;
  }
`;

export const FileInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.doveGrey};
  text-align: center;
  margin-top: 8px;

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.hibiscus};
    `}
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfilePlaceholder = styled(FaUserCircle)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const FileInput = styled.input`
  display: none;
`;

export const UserNameInput = styled.input`
  margin-left: 5px;
  padding: 7px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    margin-left: auto;
  }
`;

export const UpdateFileButton = styled(Button)`
  font-weight: 700;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-self: center;
  }
`;
