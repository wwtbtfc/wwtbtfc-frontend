import styled from 'styled-components';
import colors from '@ui/styles/colors';

const StyledNavButton = styled.button`
  width: 200px;
  cusor: pointer;
  height: 40px;
  position: relative;
  color: ${colors.brown};
  background: ${colors.tan};
  border: 0;
  transform: scale(1, 0.89);

  justify-items: center;

  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 0;
    width: 0;
    height: 0;
    transform: rotate(180deg);
    border-left: 20px solid ${colors.tan};
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
    border-left: 20px solid ${colors.tan};
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }
`;

export default StyledNavButton;
