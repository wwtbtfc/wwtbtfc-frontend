import { KeepReading, BackButton } from '@ui/components';
import { Outlet } from 'react-router';
import StyledInstructionsLayout from './StyledInstructionsLayout';

export const Home = () => {
  return (
    <StyledInstructionsLayout>
      <Outlet />
      <KeepReading
        buttons={[
          { path: '/overview', title: 'Overview' },
          { path: '/hosts', title: 'Hosts' },
          { path: '/contestants', title: 'Contestants' },
          { path: '/scoring', title: 'Scoring' },
          { path: '/lifelines', title: 'Lifelines' },
        ]}
      ></KeepReading>

      <BackButton />
    </StyledInstructionsLayout>
  );
};
