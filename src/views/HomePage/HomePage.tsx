import { Button } from '@ui/components';
import StyledHomePage from './StyledHomePage';
import logo from '/wwtbtfc.svg';
import { useState } from 'react';
import { NavigationButton } from '@ui/components/NavigationButton';

/**
 * Main home page for the app
 */
export const HomePage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <StyledHomePage>
        <div>
          <img src={logo} className="logo" alt="WWTBTFC logo" />
        </div>
        <h1>Let's Make a Game!</h1>
        <div className="card">
          <Button onClick={() => setCount1((count1) => count1 + 1)}>
            Light Button clicked {count1} times
          </Button>
        </div>
        <div className="card">
          <Button
            variant="dark"
            onClick={() => setCount2((count2) => count2 + 1)}
          >
            Dark Button clicked {count2} times
          </Button>
        </div>
        <NavigationButton buttonText="Hello" buttonUrl="/overview" />
      </StyledHomePage>
    </>
  );
};
