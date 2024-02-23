import { Outlet, useNavigate } from 'react-router';

export const Overview = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>How To Play</h1>
      <div
        onClick={() => {
          navigate('/');
        }}
      >
        back to home
      </div>
      <Outlet />
    </>
  );
};
