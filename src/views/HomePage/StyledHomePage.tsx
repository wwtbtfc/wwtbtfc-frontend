import styled from 'styled-components';
// import colors from '@ui/styles/colors';

const StyledHomePage = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  h1 {
    margin-bottom: 0;
  }

  .card {
    padding: 2em;
  }
`;

export default StyledHomePage;
