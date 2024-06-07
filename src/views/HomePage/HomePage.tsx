import { TitleBanner } from '@ui/components/TitleBanner';
import StyledHomePage from './StyledHomePage';
import logo from '/wwtbtfc.svg';
import { NavigationButton } from '@ui/components/NavigationButton';
import colors from '@ui/styles/colors';

/**
 * Main home page for the app
 */
export const HomePage = () => {
  const oneLiners = [
    'because affection is a zero sum game',
    "because there's not enough tension in this family",
    'because it was getting too chummy around here',
    'because mama raised exactly one loser',
    "because there's not enough room in this house for the both of us",
  ];
  return (
      <StyledHomePage>
        <TitleBanner title="" />
        <div>
          <img src={logo} className="logo" alt="WWTBTFC logo" />
        </div>
        <h1
          style={{
            marginBottom: '0',
          }}
        >
          Who Wants to be the Favorite Child?
        </h1>
        <h3
          style={{
            color: colors.lightGray,
            fontFamily: 'Helvetica',
            fontWeight: 400,
          }}
        >
          ...{oneLiners[Math.floor(Math.random() * oneLiners.length)]}
        </h3>

        <NavigationButton buttonText="Play!" buttonUrl="/overview" />
        <NavigationButton buttonText="Edit My Games" buttonUrl="/overview" />
        <NavigationButton buttonText="How To Play" buttonUrl="/overview" />
      </StyledHomePage>
    </>
  );
};
