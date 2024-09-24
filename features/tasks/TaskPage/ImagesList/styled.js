import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

export const StyledImagesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const RemoveImage = styled.button`
  display: none;
  position: absolute;
  border: none;
  padding: 0;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.rose};
  background-color: transparent;
  top: 4%;
  right: 4%;
  cursor: pointer;
  transition: color 100ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hibiscus};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    top: 2%;
    right: 2%;
  }
`;

export const RemoveImageIcon = styled(MdDeleteForever)`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  position: relative;
  box-shadow: 2px 2px 7px 0px hsl(0deg 0% 68%);
  cursor: pointer;
  transition: transform 80ms ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }

  &:hover ${RemoveImage} {
    display: block;
  }
`;

export const Image = styled.img`
  display: block;
  border-radius: 3px;
  width: 100%;
  min-height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const ImagesListInfo = styled.p`
  margin: 0;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.doveGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;
