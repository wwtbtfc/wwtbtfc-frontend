import { TitleBanner } from '@ui/components/TitleBanner';
import StyledOverview from './StyledOverview';
// todo: reuse the styled coponents to prevent all the wrapping

import love from '../assets/Rules_Love100pct.svg';
import questions from '../assets/Rules_Questions.svg';
import win from '../assets/Rules_Win.svg';
export const Overview = () => {
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <StyledOverview>
        <div id="welcome" className="container">
          <h3
            className="plain-text"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            Welcome to
            <strong
              className="highlight-text"
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              "Who Wants To Be The Favorite Child?"
            </strong>
          </h3>
        </div>
        <div className="container">
          <h3
            className="plain-text"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            In this game, you will compete with your siblings for a share of
            <strong className="highlight-text">"Parental Love"</strong>
          </h3>
          <img className="image-right" src={love}></img>
        </div>
        <span>
          <div className="container">
            <img className="image-left" src={questions}></img>
            <h3 className="plain-text">
              Correctly answer a series of multiple-choice
              <strong className="highlight-text">
                questions about your parents
              </strong>
              to earn your share of Parental Love.
            </h3>
          </div>
        </span>
        <div className="container">
          <h3 className="plain-text">
            The sibling with the most Parental Love at the end of the game earns
            the title of the
            <strong className="highlight-text">Favorite Child!</strong>
          </h3>
          <img
            className="image-right"
            id="win"
            src={win}
            style={{ width: `12em` }}
          ></img>
        </div>
      </StyledOverview>
    </>
  );
};
