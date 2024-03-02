import styled from 'styled-components';
export const StyledKeepReading = styled.div`
  display: flex;
  border-top: 2px dotted gray;
  position: relative;
  padding-top: 1.5em;
  .heading {
    font-size: 2em;
  }
  .button {
    border-radius: 10px;
    flex: 40%;
    margin: 0 0.5em 0.5em 0.5em;
  }
  .button-container {
    display: flex;
    flex-wrap: wrap;
  }
`;
