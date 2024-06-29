import styled from 'styled-components';

const StyledOverview = styled.div`
  .container {
    display: flex;
    align-items: center;
    margin: 0 0 0 3em;
  }
  #welcome {
    margin-top: 25px;
  }
  h3 {
    margin: 0;
    &.highlight-text {
      margin-left: 0.25em;
    }
    justify-content: center;
    align-items: center;
  }
  img {
    width: 3em;
    &.image-right {
      margin: 0 1em 1em;
    }
    &.image-left {
      margin-right: 1em;
      width: 10em;
    }
  }
`;

export default StyledOverview;
