import styled from 'styled-components';

const StyledOverview = styled.div`
  .container {
    display: flex;
    align-items: center;
    margin: 0em 0 0.25em 3em;
  }
  h3 {
    &.highlight-text {
      margin-left: 0.25em;
    }
  }
  img {
    width: 3em;
    &.image-right {
      margin: 0 1em;
    }
    &.image-left {
      margin-right: 1em;
    }
  }
`;

export default StyledOverview;
