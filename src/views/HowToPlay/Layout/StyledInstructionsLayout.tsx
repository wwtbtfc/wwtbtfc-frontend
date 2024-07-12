import styled from 'styled-components';

const StyledInstructionsLayout = styled.div`
  .container {
    display: flex;
    align-items: center;
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
