import { TitleBanner } from '@ui/components/TitleBanner';
import StyledHomePage from './StyledHomePage';
import logo from '/wwtbtfc.svg';
import { NavigationButton } from '@ui/components/NavigationButton';
import { useRef } from 'react';

/**
 * Main home page for the app
 */
export const HomePage = () => {
  const oneLiners = useRef([
    'because affection is a zero sum game',
    "because there's not enough tension in this family",
    'because it was getting too chummy around here',
    'because mama raised exactly one loser',
    "because there's not enough room in this house for the both of us",
  ]);
  return (
    <StyledHomePage>
      <TitleBanner title="" />
      <div>
        <img src={logo} className="logo" alt="WWTBTFC logo" />
      </div>
      <h1>Who Wants to be the Favorite Child?</h1>
      <h3 className="plain-text">
        ...
        {
          oneLiners.current[
            Math.floor(Math.random() * oneLiners.current.length)
          ]
        }
      </h3>

      <NavigationButton buttonText="Play!" buttonUrl="/overview" />
      <NavigationButton buttonText="Edit My Games" buttonUrl="/overview" />
      <NavigationButton buttonText="How To Play" buttonUrl="/overview" />
    </StyledHomePage>
  );
};
