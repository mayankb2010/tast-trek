import { StyledSection, Flex, Subheader } from "./styled";

const Section = ({ header, content, optionalContent, optionalElement }) => (
  <StyledSection>
    <Flex>
      <Subheader>{header}</Subheader>
      {optionalElement}

      {optionalContent}
    </Flex>
    {content}
  </StyledSection>
);

export default Section;
