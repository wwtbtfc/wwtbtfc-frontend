import { TitleBanner } from '@ui/components/TitleBanner';
import StyledOverview from './StyledOverview';
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
          </h3>
          <h3
            className="highlight-text"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            "Who Wants To Be The Favorite Child?"
          </h3>
        </div>
        <div className="container">
          <h3
            className="plain-text"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            In this game, you will compete with your siblings for a share of
          </h3>
          <h3 className="highlight-text">"Parental Love"</h3>
          <img className="image-right" src={love}></img>
        </div>
        <span>
          <div className="container">
            <img className="image-left" src={questions}></img>
            <h3 className="plain-text">
              Correctly answer a series of multiple-choice
            </h3>

            <h3 className="highlight-text">questions about your parents</h3>

            <h3
              className="plain-text"
              style={{
                marginLeft: '5px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              to earn your share of Parental Love.
            </h3>
          </div>
        </span>
        <div className="container">
          <h3 className="plain-text">
            The sibling with the most Parental Love at the end of the game earns
            the title of the
          </h3>
          <h3 className="highlight-text">Favorite Child!</h3>
          <img
            className="image-right"
            src={win}
            style={{ width: `15em` }}
          ></img>
        </div>
      </StyledOverview>
    </>
  );
};
