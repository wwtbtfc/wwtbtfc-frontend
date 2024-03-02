import { Button } from '..';
import styled from 'styled-components';
import BackLight from './assets/BackLight.svg';
import colors from '@ui/styles/colors';

export const StyledBackButton = styled(Button)`
  border-radius: 10px;
  color: ${colors.tan};
  font-size: 20px;
  background-image: url(${BackLight});
  background-size: 1.25em;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 0.5em;
  padding-left: 2.5em;
  padding-right: 1em;
  cursor: pointer;
`;
