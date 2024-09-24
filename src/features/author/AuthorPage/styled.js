import styled from "styled-components";

export const Paragraph = styled.p`
  margin: 0;
  line-height: 1.5;

  &:nth-child(2) {
    margin: 16px 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.teal};

  &:hover {
    color: ${({ theme }) => theme.colors.lightTeal};
    text-decoration: underline;
  }
`;
