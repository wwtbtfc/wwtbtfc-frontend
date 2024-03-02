'use client';
import { StyledKeepReading } from './StyledKeepReading';
import { Button } from '..';
import { useNavigate } from 'react-router';

// Navigation component for How To Play section. Creates four buttons, one for each How To Play section, except the current section. No Parameters. Uses URL to identify current section.

export const KeepReading = () => {
  const url = window.location.pathname.split('/')[2];
  const navigate = useNavigate();
  interface possibleButtons {
    path: string;
    title: string;
  }
  // All buttons, text and path, that are possible
  const possibleButtons: possibleButtons[] = [
    { path: 'how-to-play', title: 'Overview' },
    { path: 'hosts', title: 'Hosts' },
    { path: 'contestants', title: 'Contestants' },
    { path: 'scoring', title: 'Scoring' },
    { path: 'lifelines', title: 'Lifelines' },
  ];

  // navigates to the page corresponding to the button clicked
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: possibleButtons | undefined = possibleButtons.find(
      (button) => {
        return button.title === event.currentTarget.innerHTML;
      }
    );
    if (button) {
      if (button.path === 'how-to-play') {
        navigate('/how-to-play');
        return;
      }
      navigate(`/how-to-play/${button.path}`);
    }
  };

  const ButtonsMap = () => {
    return possibleButtons.map((button) => {
      // if on the Overview page, return all buttons except overview
      if (!url) {
        if (button.path !== 'how-to-play') {
          return (
            <Button key={button.path} onClick={handleClick} className="button">
              {button.title}
            </Button>
          );
        }
        // if not on the Overview page, return all buttons except current page
      } else if (!url.includes(button.path)) {
        return (
          <Button key={button.path} onClick={handleClick} className="button">
            {button.title}
          </Button>
        );
      }
    });
  };
  return (
    <StyledKeepReading>
      <div className="heading">Keep Reading About: </div>
      <div className="button-container">{ButtonsMap()}</div>
    </StyledKeepReading>
  );
};
