import { Outlet } from 'react-router';
import { StyledContestantsLayout } from './StyledContestantsLayout';
import { StyledInstructionsLayout } from '../Layout';

export const ContestantsLayout = () => {
  return (
    <>
      <StyledInstructionsLayout>
        <StyledContestantsLayout>
          <div className="container">
            <h3 className="title">Contestants</h3>
          </div>

          <Outlet></Outlet>
        </StyledContestantsLayout>
      </StyledInstructionsLayout>
    </>
  );
};
