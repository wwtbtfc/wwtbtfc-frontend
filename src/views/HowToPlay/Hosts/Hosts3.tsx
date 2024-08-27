import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Hosts3 = () => {
  return (
    <>
      <strong className="highlight-text">During The Game:</strong>

      <p className="plain-text">
        The host should
        <strong className="highlight-text">share their screen </strong>
        so that everyone can see it. If you're playing in person, we suggest
        screen casting to a TV or connecting with a cable. As each round starts,
        the host will introduce the question and start a timer to begin the
        round. Contestants must submit their answers before the time expires.
      </p>
      <p className="plain-text">
        At the end of the round, the host has the option to review each
        candidate's selected answer, and discuss their reasoning behind the
        choice. If you're ready to move on, the Host can reveal the correct
        answer and discuss the scoring consequences of the round.
      </p>
      <br></br>
      <strong className="highlight-text">For Some Extra Spice: </strong>
      <p className="plain-text">
        If you really want to ramp up the drama, we suggest offering a
        <strong className="highlight-text">cash prize </strong>
        pool. At the end of the game, the cash can be distributed
        proportionately to each candidate's share of total Parental Love. For
        example, if the total pool is $100, and a sibling scores 50% of Parental
        Love, they win $50 from the prize pool.
      </p>
      <PageArrows currentPage={3} totalPages={3}></PageArrows>
    </>
  );
};
