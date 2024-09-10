import styled from 'styled-components';

const centerContainerWidth: number = 60;

export const StyledContestantsLayout = styled.div`
  .layout-container {
    display: flex;
  }
  .side-panel {
    width: ${(100 - centerContainerWidth) / 2}%;
    padding-right: 2em;
  }
  .center-container {
    width: ${centerContainerWidth}%;
  }
  h3 {
    font-size: 2em;
    &#title {
      display: inline-block;
      margin-top: 0.5em;
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
