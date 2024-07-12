import { KeepReading, BackButton } from '@ui/components';
import { Outlet } from 'react-router';
import StyledInstructionsLayout from './StyledInstructionsLayout';
import { StyledInstructionsBody } from './StyledInstructionsBody';

export const InstructionsLayout = () => {
  return (
    <>
      <StyledInstructionsLayout>
        <Outlet />
      </StyledInstructionsLayout>
      <KeepReading
        buttons={[
          { path: '/overview', title: 'Overview' },
          { path: '/hosts', title: 'Hosts' },
          { path: '/contestants', title: 'Contestants' },
          { path: '/scoring', title: 'Scoring' },
          { path: '/lifelines', title: 'Lifelines' },
        ]}
      ></KeepReading>

      <StyledInstructionsBody>
        <BackButton />
      </StyledInstructionsBody>
    </>
  );
};
