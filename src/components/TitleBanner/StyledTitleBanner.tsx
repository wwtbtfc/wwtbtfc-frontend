import styled from 'styled-components';

const StyledTitleBanner = styled.header`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  border-bottom: 2px solid #4d2f2e;
  min-width: 1200px;

  .title {
    font-size: 3em;
    flex-shrink: 0;
    padding: 1.5em;
    margin: 0 auto;
    text-align: center;
    display: inline-block;
    position: absolute;
    left: 50%;
    min-width: 200px;
    transform: translateX(-50%);
  }
  .user {
    font-family: Arial;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 1.5em;
    font-weight: 100;
    position: absolute;
    right: 3em;
    display: inline block;
  }
  img {
    position: absolute;
    flex-shrink: 0;
    right: 15px;
    max-width: 35px;
    height: auto;
  }
`;

export default StyledTitleBanner;
