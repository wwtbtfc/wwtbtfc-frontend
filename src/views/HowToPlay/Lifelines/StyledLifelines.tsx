import styled from 'styled-components';

const centerContainerWidth = 60;

export const StyledLifelines = styled.div`
  h3 {
    font-size: 2em;
    &.title {
      display: inline-block;
      margin-top: 1em;
    }
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .center-container {
    width: ${centerContainerWidth}%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  img {
    width: 4em;
  }
  .text-container {
    flex-direction: column;
    margin-left: 2em;
  }

  .block {
    width: 50em;
    text-align: left;
    justify-content: flex-start;
  }
  .content-block {
    justify-content: center;
    flex-direction: column;
    margin-top: 3em;
    margin-bottom: 8em;
  }
  .first-row {
    margin-bottom: 4em;
  }
  h4 {
    width: 100%;
  }
`;
