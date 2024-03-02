import { StyledBackButton } from './StyledBackButton';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router';

export interface BackButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  path?: string;
}
/**
 * Clicking this button will bring the user back to the given `path`.
 * This component is only meant to be used for menu navigation before the host has started a game.
 *
 * @param {object} props - Props object for the component
 * @param {string} props.text - Optional; The text label to appear inside the button
 *        Defaults to "Back To Home"
 * @param {string} props.path - Optional; The relative URL path to which the user will travel on click.
 *        Defaults to "/"
 */
export const BackButton = ({
  text = 'Back To Home',
  path = '/',
  ...restprops
}: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <StyledBackButton
      {...restprops}
      onClick={() => {
        navigate(path);
      }}
      variant="dark"
    >
      {text}
    </StyledBackButton>
  );
};
