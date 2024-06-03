import { ButtonHTMLAttributes } from 'react';
// import StyledNavigationButton from './StyledNavigationButton';
import { useNavigate } from 'react-router';
import img from './assets/NavButton.png';

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
    <div
      className="container"
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '600px',
        margin: 'auto',
        height: 'auto',
      }}
    >
      <img
        src={img}
        style={{
          width: '100%',
        }}
      ></img>
      <div
        style={{
          position: 'absolute',
        }}
      >
        {props.buttonText}
      </div>
    </div>
  );
};
