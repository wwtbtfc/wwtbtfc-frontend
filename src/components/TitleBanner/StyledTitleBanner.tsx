import styled from 'styled-components';
import colors from '@ui/styles/colors';

const StyledTitleBanner = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => (props.title ? `2px solid ${colors.brown};` : `none;`)} 
  position: relative;

  .title {
    font-size: 3em;
    margin: 0;
    text-align: center;
  }
  .user-container {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 5%;
  }
  .user {
    font-family: Poppins, Arial, sans-serif;
    font-size: 1.5em;
    font-weight: 100;
  }
  img {
    width: 2.5em;
  }
`;

export default StyledTitleBanner;
