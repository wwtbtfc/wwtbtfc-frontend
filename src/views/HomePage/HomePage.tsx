import { TitleBanner } from '@ui/components/TitleBanner';
import StyledHomePage from './StyledHomePage';
import logo from '/wwtbtfc.svg';
import { NavigationButton } from '@ui/components/NavigationButton';

/**
 * Main home page for the app
 */
export const HomePage = () => {
  return (
    <>
      <StyledHomePage>
        <TitleBanner title="" />
        <div>
          <img src={logo} className="logo" alt="WWTBTFC logo" />
        </div>
        <h1>Who Wants to be the Favorite Child?</h1>

        <NavigationButton buttonText="Play!" buttonUrl="/overview" />
        <NavigationButton buttonText="Edit My Games" buttonUrl="/overview" />
        <NavigationButton buttonText="How To Play" buttonUrl="/overview" />
      </StyledHomePage>
    </>
  );
};
