import { ButtonHTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router';
import { NavigationButtonImage } from './NavButtonImage';

export interface NavButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonUrl: string;
}

export const NavigationButton = (props: NavButtonProps) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    navigate(props.buttonUrl);
  };
  return (
    <div
      className="container"
      onClick={handleClick}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '800px',
        margin: 'auto',
        paddingTop: '30px',
        height: 'auto',
      }}
    >
      <NavigationButtonImage word={props.buttonText} hover={hover} />
      <div
        style={{
          position: 'absolute',
          fontSize: '30px',
          cursor: 'pointer',
          height: '100%',
          alignContent: 'center',
          width: props.buttonText.length < 10 ? '6em' : '10em',
        }}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
      >
        {props.buttonText}
      </div>
    </div>
  );
};
