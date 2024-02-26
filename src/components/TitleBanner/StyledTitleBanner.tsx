import styled from 'styled-components';

const StyledTitleBanner = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;


  container {
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
  }
  .title {
    font-size: 3em;
    padding: 1.5em;
    margin: 0 auto;
  }
  .user {
    font-family: Arial;
    float: right;
    font-size: 1.5em;
    font-weight: 100;
    display: inline block;
  }
  img {
    position: absolute;
    display: inline-block
    top: 50px;
    right: 15px;
    max-width: 35px;
    height: auto;
  }
`;

export default StyledTitleBanner;
