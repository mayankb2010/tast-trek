import styled from "styled-components";
import { PopupForm } from "../../../../common/PopupForm";

export const DeleteAccountForm = styled(PopupForm)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DeleteText = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.hibiscus};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
