import { Outlet, useNavigate } from 'react-router';
import { TitleBanner } from '@ui/components/TitleBanner';
import { BackButton } from '@ui/components';

export const Overview = () => {
  const navigate = useNavigate();
  return (
    <>
      <TitleBanner title="How To Play"></TitleBanner>
      <h1>How To Play</h1>
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        back to home
      </div>
      <Outlet />
      <BackButton />
    </>
  );
};
