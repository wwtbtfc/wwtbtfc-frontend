import { Outlet } from 'react-router';
import { StyledInstructionsLayout } from '../Layout';
import { StyledLifelines } from './StyledLifelines';
import doubleDip from '../assets/DoubleDipDark.svg';
import fiftyFifty from '../assets/FiftyFiftyDark.svg';
import swap from '../assets/SwapTheQuestionDark.svg';
import phone from '../assets/PhoneAFriendDark.svg';

export const Lifelines = () => {
  return (
    <StyledInstructionsLayout>
      <StyledLifelines>
        <div className="container row">
          <div className="center-container">
            <h3 className="title">Lifelines</h3>
          </div>
        </div>
        <div className="container row">
          <p className="center-container plain-text">
            Each contestant is equipped with all of the following abilities,
            called "lifelines." Each of these lifelines can only be used once
            per game, but contestants have the option to use multiple lifelines
            on the same question.
          </p>
        </div>
        <div className="container content-block">
          <div className="container row first-row">
            <div className="center-container">
              <div className="container block">
                <img src={doubleDip}></img>
                <div className="container text-container">
                  <h4 className="highlight-text">Double-Dip</h4>
                  <div className="plain-text">
                    Allows you to select two answers instead of one. You win the
                    round if either of your answers are correct.
                  </div>
                </div>
              </div>
              <div className="container block">
                <img src={fiftyFifty}></img>
                <div className="container text-container">
                  <h4 className="highlight-text">50/50</h4>
                  <div className="plain-text">
                    Removes two incorrect answers from the board, effectively
                    giving you a 50/50 chance of selecting the correct answer.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container row">
            <div className="center-container">
              <div className="container block">
                <img src={swap}></img>
                <div className="container text-container">
                  <h4 className="highlight-text">Swap-the-Question</h4>
                  <div className="plain-text">
                    Replace the current question with an alternative of equal
                    difficulty. Doing so will reset the clock, giving you
                    adequate time to answer the new question.
                  </div>
                </div>
              </div>
              <div className="container block">
                <img src={phone}></img>
                <div className="container text-container">
                  <h4 className="highlight-text">Phone-A-Friend</h4>
                  <div className="plain-text">
                    Call a friend or family member to ask for their advice. You
                    may only make this call after all other contestants have
                    locked in their answer for the round.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledLifelines>
      <Outlet></Outlet>
    </StyledInstructionsLayout>
  );
};
