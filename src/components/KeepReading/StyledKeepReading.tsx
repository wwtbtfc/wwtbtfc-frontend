import styled from 'styled-components';
import colors from '@ui/styles/colors';
export const StyledKeepReading = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px dotted ${colors.lightGray};
  padding-top: 1.5em;

  .heading {
    font-size: 2em;
  }
  .button {
    border-radius: 10px;
    flex: 40%;
    margin: 0 0.5em 0.5em 0.5em;
    &:hover {
      cursor: pointer;
      background-color: ${colors.lightGray};
    }
  }
  .button-container {
    display: flex;
    flex-wrap: wrap;
  }
`;
