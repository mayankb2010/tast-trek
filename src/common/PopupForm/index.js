import styled from "styled-components";

export const PopupForm = styled.form`
  position: relative;
  max-width: 450px;
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0px 0px 20px #1b2525;
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 40px;
  gap: 20px;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 80%;
  }
`;
