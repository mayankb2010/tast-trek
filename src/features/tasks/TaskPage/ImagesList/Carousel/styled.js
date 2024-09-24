import styled from "styled-components";

export const CarouselImage = styled.img`
  max-height: 90%;
  max-width: 90%;
  box-shadow: 0 0 20px #1b2525;
  border: 3px solid #565f5f;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-height: 80%;
    max-width: 80%;
  }
`;
