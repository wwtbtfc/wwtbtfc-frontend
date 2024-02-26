import styled from 'styled-components';

const StyledTitleBanner = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;

  .title {
    font-size: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .user {
    float: right;
  }
`;

export default StyledTitleBanner;
