import { Button } from '..';
import styled from 'styled-components';
import BackLight from '../../views/HowToPlay/assets/BackLight.svg';
import colors from '@ui/styles/colors';

export const StyledBackButton = styled(Button)`
  border-radius: 5px;
  color: ${colors.tan};
  font-size: 20px;
  background-image: url(${BackLight});
  background-size: 1.25em;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 0.5em;
  padding-left: 2.5em;
  padding-right: 1em;
  margin-top: 5vh;
  margin-left: 3vw;
  cursor: pointer;
`;
