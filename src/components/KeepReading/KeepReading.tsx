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

export const KeepReading = ({ buttons }: keepReadingProps) => {
  const url = window.location.pathname;
  const navigate = useNavigate();

  // All buttons, text and path, that are possible
  // const possibleButtons: possibleButtons[] = [
  //   { path: 'how-to-play', title: 'Overview' },
  //   { path: 'hosts', title: 'Hosts' },
  //   { path: 'contestants', title: 'Contestants' },
  //   { path: 'scoring', title: 'Scoring' },
  //   { path: 'lifelines', title: 'Lifelines' },
  // ];

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
