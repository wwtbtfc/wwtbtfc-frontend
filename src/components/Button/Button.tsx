import { ButtonHTMLAttributes } from 'react';
import StyledButton from './StyledButton';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark';
}

export const Button = ({ variant = 'light', ...restProps }: ButtonProps) => {
  return <StyledButton variant={variant} {...restProps} />;
};
