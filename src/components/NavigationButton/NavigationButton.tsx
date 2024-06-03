import { ButtonHTMLAttributes } from 'react';
import StyledNavigationButton from './StyledNavigationButton';
import { useNavigate } from 'react-router';
import StyledButtonBorder from './StyledButtonBorder';

export interface NavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonUrl: string;
}

export const NavigationButton = (props: NavButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.buttonUrl);
  };
  return (
    <StyledButtonBorder>
      <StyledNavigationButton className="navButton" onClick={handleClick}>
        {props.buttonText}
      </StyledNavigationButton>
    </StyledButtonBorder>
  );
};
