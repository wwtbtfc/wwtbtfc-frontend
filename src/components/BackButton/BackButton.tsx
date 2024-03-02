import { StyledBackButton } from './StyledBackButton';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router';

export interface BackButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  path?: string;
}
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
