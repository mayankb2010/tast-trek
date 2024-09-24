import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 3px;
  box-shadow: 2px 2px 7px 0px hsl(0, 0%, 68%);
  background-color: white;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  border-bottom: 2px solid #ebecea;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const Subheader = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: bold;
  align-self: flex-start;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 20px;
  }
`;
