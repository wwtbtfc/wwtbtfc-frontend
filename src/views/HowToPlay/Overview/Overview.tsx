import { TitleBanner } from '@ui/components/TitleBanner';

export const Overview = () => {
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <div className="container" style={{ display: 'flex' }}>
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
    </>
  );
};
