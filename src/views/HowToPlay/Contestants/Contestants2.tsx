import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Contestants2 = () => {
  return (
    <>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Selecting an Answer:</strong>
          <p className="plain-text">
            During each round, you will be presented with a question and
            <strong className="highlight-text">
              4 possible answer choices.
            </strong>
            Only one of the choices is correct, and it is your job to find it.
            Chose wisely! An incorrect answer means that you are
            <strong className="urgent highlight-text">eliminated</strong>
            from the game.
          </p>
        </div>
        <div className="side-panel"></div>
      </div>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <p className="plain-text">
            Click (or tap) on an answer choice to select it. If you are
            confident in your selection, you can choose to
            <strong className="highlight-text">"Lock In"</strong>
            your answer, after which your selection cannot be changed. You must
            lock in an answer before the end of the round.
          </p>
        </div>
        <div className="side-panel"></div>
      </div>
      <br></br>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Keep an Eye on the Timer</strong>
          <p className="plain-text">
            You have a limited amount of time to answer the question each round.
            If you have selected (but not locked in) an answer when the timer
            expires, that selection is
            <strong className="highlight-text">automatically locked in,</strong>
            and will be consiered your final answer. Failure to select or lock
            in an answer in the allotted time is considered an incorrect answer,
            resulting in your
            <strong className="urgent highlight-text">elimination</strong>
            from the game.
          </p>
        </div>
        <div className="side-panel"></div>
      </div>

      <PageArrows currentPage={2} totalPages={3}></PageArrows>
    </>
  );
};
