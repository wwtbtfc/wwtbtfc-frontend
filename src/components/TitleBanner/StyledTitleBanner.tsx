import styled from 'styled-components';
import colors from '@ui/styles/colors';

const StyledTitleBanner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors.brown};
  position: relative;

  .title {
    font-size: 3em;
    margin: 0;
text-align: center;
  }
  .user-container {
    display: flex;
    gap: 10px;
  }
  .user {
    font-family: Poppins, Arial, sans-serif;
    font-size: 1.5em;
    font-weight: 100;
  }
  img {
    right: 3em;
    max-width: 2.5em;
    height: auto;
  }
`;

export default StyledTitleBanner;
