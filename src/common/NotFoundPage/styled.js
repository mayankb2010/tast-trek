import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundPageSection = styled.section`
  text-align: center;

  p {
    font-size: 18px;
  }
`;

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkTeal};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.teal};
  }
`;
