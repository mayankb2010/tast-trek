import styled from "styled-components";

export const DeleteTaskWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 0px 20px #1b2525;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 80%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ConfirmDelete = styled.p`
  text-align: center;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.hibiscus};
  width: 100%;
  font-weight: 700;
  line-height: 1.5;
`;
