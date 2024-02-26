import styled from 'styled-components';

const StyledTitleBanner = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;

  .title {
    font-size: 3em;
    padding: 1.5em;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .user {
    font-family: Arial;
    font-size: 1.5em;
    font-weight: 100;
    position: absolute;
    right: 3em;
    display: inline block;
  }
  img {
    position: absolute;
    right: 15px;
    max-width: 35px;
    height: auto;
  }
`;

export default StyledTitleBanner;
