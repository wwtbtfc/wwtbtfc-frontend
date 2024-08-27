import { PageArrows } from '@ui/components/PageArrows/PageArrows';
import { contestantsUrl } from '.';
// todo: reuse the styled coponents to prevent all the wrapping

export const Contestants1 = () => {
  return (
    <>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Joining the Game:</strong>
          <p className="plain-text">
            To play this game,
            <strong className="highlight-text">
              you will need to have your own device
            </strong>
            (such as a smartphone or laptop). This device was equipped with a
            web browser and a stable Internet connection. It will serve as your
            personal control panel for selecting answers, activating lifelines,
            and tracking your score. When the host starts the game, you can join
            as a contestant by navigating to
            <a target="_blank" href={contestantsUrl}>
              {contestantsUrl}
            </a>
            .
          </p>
        </div>
        <div className="side-panel"></div>
      </div>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <strong className="highlight-text">Structure of the Game: </strong>
          <p className="plain-text">
            The game is divided into
            <strong className="highlight-text">14 rounds</strong>, during each
            of which, you will be asked to answer a single, multiple-choice
            question about some aspect of your parents' lives. Be quick about
            it, though!
            <strong className="highlight-text">Each question is timed,</strong>
            and failure to select an answer during the allotted time will have
            the same consequence as an incorrect answer.
          </p>
        </div>
        <div className="side-panel"></div>
      </div>
      <div className="container row">
        <div className="side-panel"></div>
        <div className="center-container">
          <p className="plain-text">
            Each round is more difficult than the last, and is therefore worth a
            greater percentage of Parental Love.
            <strong className="highlight-text">
              A single incorrect answer means that you are
              <strong className="urgent"> eliminated,</strong>
            </strong>
            and your share of Parental Love is redistributed to the remaining
            siblings. For more details about how scoring works, see the
            "Scoring" section of "How To Play."
          </p>
        </div>
        <div className="side-panel"></div>
      </div>

      <PageArrows currentPage={1} totalPages={3}></PageArrows>
    </>
  );
};
