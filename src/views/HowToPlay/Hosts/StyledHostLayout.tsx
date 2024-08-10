import styled from 'styled-components';

export const StyledHostLayout = styled.div`
  .title {
    margin-top: 0.5em;
  }
  .layout-container {
    display: flex;
  }
  .side-panel {
    width: 20%;
    padding-right: 2em;
  }
  .center-container {
    width: 60%;
  }
  h3 {
    font-size: 2em;
    &#title {
      display: inline-block;
    }
  }
  img {
    &#host-icon {
      width: 7em;
      float: right;
      margin-top: 2em;
      margin-bottom: 3em;
    }
  }
`;
