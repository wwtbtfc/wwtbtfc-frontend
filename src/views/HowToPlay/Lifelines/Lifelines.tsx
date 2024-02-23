import { useNavigate } from 'react-router';
export const Lifelines = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>lifelines</h1>
      <div onClick={() => navigate('/how-to-play')}>back to overview</div>
      <div onClick={() => navigate('/')}>back to home</div>
    </>
  );
};
