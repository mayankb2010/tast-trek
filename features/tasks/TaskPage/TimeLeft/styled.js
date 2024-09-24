import styled from "styled-components";

export const TimePassedInfo = styled.span`
  color: ${({ theme }) => theme.colors.rose};
  margin-right: 10px;
`;

export const TaskNotDoneInfo = styled.span`
  color: ${({ theme }) => theme.colors.hibiscus};
  font-weight: 700;
`;

export const TaskDoneInfo = styled.span`
  color: ${({ theme }) => theme.colors.teal};
  font-weight: 700;
`;
