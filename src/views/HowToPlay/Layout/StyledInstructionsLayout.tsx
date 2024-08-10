import styled from 'styled-components';

export const StyledInstructionsLayout = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    margin: 0;
    &.highlight-text {
      margin-left: 0.25em;
    }
    justify-content: center;
    align-items: center;
  }
`;

export default StyledInstructionsLayout;
