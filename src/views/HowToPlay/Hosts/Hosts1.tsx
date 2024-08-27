import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Hosts1 = () => {
  return (
    <>
      <p className="plain-text">
        This game requires some advanced preparation. Someone must be
        responsible for sourcing the questions, recording the answers, and
        providing convincing (but incorrect) multiple-choice options.
      </p>
      <p className="plain-text">
        This “someone” will know all the answers, and therefore cannot be a
        contestant. It is also their job to guide contestants through the game,
        building tension and drama along the way like any good gameshow.
      </p>
      <p className="plain-text">
        This “someone” is the
        <strong className="highlight-text">Host!</strong>
      </p>
      <p className="plain-text">
        The host can be anyone: a sister-in-law, a close family friend, or even
        cousin Jim. The only restriction is that the host cannot be someone who
        wants to play.
      </p>
      <PageArrows currentPage={1} totalPages={3}></PageArrows>
    </>
  );
};
