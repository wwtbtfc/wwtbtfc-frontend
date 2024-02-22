import { ButtonHTMLAttributes } from 'react';
import StyledButton from './StyledButton';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'light' | 'dark';
}

/**
 * Pill-shaped button component.
 *
 * @param {object} props - Props object for the component
 * @param {string} props.variant - Optional; Can be either 'light' or 'dark'.
 *    If 'light', the component is filled with a tan color and dark text.
 *    Colors are reversed for the 'dark' setting.
 *    Defaults to light.
 */
export const Button = ({ variant = 'light', ...restProps }: ButtonProps) => {
  return <StyledButton variant={variant} {...restProps} />;
};
