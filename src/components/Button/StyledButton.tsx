import styled from 'styled-components';
import colors from '@ui/styles/colors';
import { ButtonProps } from './Button';

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<ButtonProps>`
  border: 3px solid ${colors.brown};
  padding: 10px 15px;
  border-radius: 30px;
  font-family: 'Single Day', Arial, sans-serif;
  font-size: 30px;
  color: ${(props) => (props.variant === 'light' ? colors.brown : colors.tan)};
  background-color: ${(props) =>
    props.variant === 'light' ? colors.tan : colors.brown};
`;

export default StyledButton;
