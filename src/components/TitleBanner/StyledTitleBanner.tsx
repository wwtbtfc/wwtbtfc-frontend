import styled from 'styled-components';
import colors from '@ui/styles/colors';

const StyledTitleBanner = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors.brown};
  min-width: 560px;

  .title {
    font-size: 3em;
    flex-shrink: 0;
    margin: 0;
    position: relative;
text-align: center;
    min-width: 200px;
  }
  .user-container {
    display: flex;
    min-width: 120px;
  }
  .user {
    font-family: Arial;
    position: relative;
    font-size: 1.5em;
    font-weight: 100;
    right: 3em;
    display: inline block;
  }
  img {
    position: relative;
    right: 3em;
    max-width: 2.5em;
    height: auto;
  }
`;

export default StyledTitleBanner;
