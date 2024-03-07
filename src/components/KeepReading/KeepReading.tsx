'use client';
import { StyledKeepReading } from './StyledKeepReading';
import { Button } from '..';
import { useNavigate } from 'react-router';

// Navigation component for How To Play section. Creates four buttons, one for each How To Play section, except the current section. No Parameters. Uses URL to identify current section.

interface keepReadingProps {
  buttons: possibleButtons[];
}

interface possibleButtons {
  path: string;
  title: string;
}

/**
 * Rectangular buttons for navigation. All buttons will be displayed except the one for the page the user is currently on.
 * @param {keepReadingProps} buttons object with a "path" property that should be the unique pathname for the desired button, without the base url. For example, "localhost:5175/how-to-play/overview" would be simple 'how-to-play/overview.' Buttons object also has a "title" property that is a simple string of the text that you want to appear in the button.
 */
export const KeepReading = ({ buttons }: keepReadingProps) => {
  const url = window.location.pathname;
  const navigate = useNavigate();

  // navigates to the page corresponding to the button clicked
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: possibleButtons | undefined = buttons.find((button) => {
      return button.title === event.currentTarget.innerHTML;
    });
    if (button) {
      navigate(button.path);
    }
  };

  return (
    <StyledKeepReading>
      <div className="heading">Keep Reading About: </div>
      <div className="button-container">
        {buttons.map((button) => {
          // if on the Overview page, return all buttons except overview
          if (!url.includes(button.path)) {
            return (
              <Button
                key={button.path}
                onClick={handleClick}
                className="button"
              >
                {button.title}
              </Button>
            );
          }
        })}
      </div>
    </StyledKeepReading>
  );
};
