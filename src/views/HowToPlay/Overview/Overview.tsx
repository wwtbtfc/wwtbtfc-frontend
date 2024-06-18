import { TitleBanner } from '@ui/components/TitleBanner';
import StyledOverview from './StyledOverview';
import love from '../assets/Rules_Love100pct.svg';
export const Overview = () => {
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <StyledOverview>
        <div className="container">
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
          <h3
            className="highlight-text"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            "Parental Love"
          </h3>
          <img className="image-right" src={love}></img>
        </div>
        <div className="container">
          <img className="image-left" src={love}></img>
          <h3
            className="plain-text"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            In this game, you will compete with your siblings for a share of
          </h3>
          <h3
            className="highlight-text"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            "Parental Love"
          </h3>
        </div>
      </StyledOverview>
    </>
  );
};
