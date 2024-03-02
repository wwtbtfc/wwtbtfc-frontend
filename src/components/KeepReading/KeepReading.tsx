'use client';
import { StyledKeepReading } from './StyledKeepReading';
import { Button } from '..';

export const KeepReading = () => {
  interface possibleButtons {
    path: string;
    title: string;
  }
  const possibleButtons: possibleButtons[] = [
    { path: '/how-to-play', title: 'Overview' },
    { path: '/hosts', title: 'Hosts' },
    { path: '/contestants', title: 'Contestants' },
    { path: '/scoring', title: 'Scoring' },
    { path: '/lifelines', title: 'Lifelines' },
  ];

  const url = window.location.href;
  const ButtonsMap = () => {
    return possibleButtons.map((button) => {
      if (!url.includes(button.path)) {
        return <Button className="button">{button.title}</Button>;
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
