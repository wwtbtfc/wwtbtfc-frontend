import styled from 'styled-components';
import colors from '@ui/styles/colors';

const StyledNavBorder = styled.button`
  height: 40px;
  cusor: pointer;
  position: relative;
  background: ${colors.brown};
  border: 0;
  z-index: 0;
  &::after {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 0;
    width: 0;
    height: 0;
    transform: rotate(180deg);
    border-left: 20px solid ${colors.brown};
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
  &::before {
    content: '';
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 20px solid ${colors.brown};
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;

export default StyledNavBorder;
