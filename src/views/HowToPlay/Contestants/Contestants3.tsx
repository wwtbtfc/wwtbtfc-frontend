import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Contestants3 = () => {
  return (
    <>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Using Lifelines:</strong>

          <p className="plain-text">
            You are equipped with
            <strong className="highlight-text">
              4 helpful abilities called "lifelines,"
            </strong>
            each of which can be used once per game. Some lifelines will have an
            effect on the game timer. See the "Lifelines" section of "How To
            Play" for more details. A Single incorrect answer results in
            <strong className="urgent highlight-text">elimination</strong>
            from the game, so don't be afraid to use your lifelines when you
            need to!
          </p>
        </div>
        <div className="side-panel"></div>
      </div>
      <br></br>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Safe Zones</strong>
          <p className="plain-text">
            The fifth and tenth questions of the game are known as
            <strong className="highlight-text">"Safe Zones."</strong>
            Correctly answering these questions will garuntee you a minimum
            score if you are eliminated after these rounds. See the "Scoring"
            section of "How To Play" for more details about how Safe Zones
            affect your final score.
          </p>
        </div>

        <div className="side-panel"></div>
      </div>
      <br></br>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Walking Away:</strong>
          <p className="plain-text">
            If you don't know the answer to a question, you can choose to
            <strong className="highlight-text">"Walk Away."</strong>
            Doing so will end the game for you, but you will leave with all the
            Parental Love you have accumulated so far. This can be a better
            outcome than an incorrect guess, which will drop your score back
            down to the last Safe Zone or zero.
          </p>
        </div>
        <div className="side-panel"></div>
      </div>

      <PageArrows currentPage={3} totalPages={3}></PageArrows>
    </>
  );
};
