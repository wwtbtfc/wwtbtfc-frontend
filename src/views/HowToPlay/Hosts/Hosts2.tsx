import { PageArrows } from '@ui/components/PageArrows/PageArrows';
// todo: reuse the styled coponents to prevent all the wrapping

export const Hosts2 = () => {
  return (
    <>
      <strong className="highlight-text">Before The Game:</strong>

      <p className="plain-text">
        It's the host's job to
        <strong className="highlight-text">interview your parents</strong>
        and create the game's questions, answers, and incorrect multiple-choice
        options. You can create a new game and record the questions by selecting
        <strong className="highlight-text">"Sign In As Host"</strong>
        from the main menu, and then
        <strong className="highlight-text">"Edit My Games"</strong>
        once signed in.
      </p>
      <p className="plain-text">
        The game has 14 rounds, and each round consists of one question.
        However, since the candidates have the option of swapping the question
        using one of the lifelines, the Host must record at least 2 possible
        questions for each round. This means you will need a
        <strong className="highlight-text">minimum of 28 questions </strong>
        about your parents to begin the game.
      </p>

      <PageArrows currentPage={2} totalPages={3}></PageArrows>
    </>
  );
};
