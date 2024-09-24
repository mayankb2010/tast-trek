import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Tasks = styled.ul`
  list-style: none;
  padding: 0;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.darkTeal};
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.teal};
  }
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid hsl(0, 0%, 85%);
  grid-gap: 12px;

  &:hover {
    border-bottom: 2px solid #5ea6a6c2;

    ${StyledLink} {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: auto 1fr auto;
  }

  ${({ hiden }) =>
    hiden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-basis: 100%;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const DeadlineDate = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.doveGrey};
  margin-right: 20px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`;
