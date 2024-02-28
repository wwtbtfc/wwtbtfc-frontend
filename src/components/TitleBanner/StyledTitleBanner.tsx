import styled from 'styled-components';

const StyledTitleBanner = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90px;
  border-bottom: 2px solid #4d2f2e;

  .title {
    font-size: 3em;
    flex-shrink: 0;
    padding: 1.5em;
    margin: 0 auto;
    position: relative;
    left: 5%;
    min-width: 200px;
  }
  .user {
    font-family: Arial;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 1.5em;
    font-weight: 100;
    right: 2em;
    display: inline block;
  }
  img {
    position: relative;
    flex-shrink: 0;
    right: 15px;
    max-width: 35px;
    height: auto;
  }
`;

export default StyledTitleBanner;
