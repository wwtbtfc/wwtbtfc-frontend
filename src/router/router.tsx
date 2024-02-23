import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/how-to-play',
    element: <div>how to play</div>,
  },
  {
    path: '/how-to-play/hosts-1',
    element: <h1>hosts page 1</h1>,
  },
  {
    path: '/how-to-play/hosts-2',
    element: <h1>hosts page 2</h1>,
  },
  {
    path: '/how-to-play/hosts-3',
    element: <h1>hosts page 3</h1>,
  },
  {
    path: '/how-to-play/contestants-1',
    element: <h1>contestants 1</h1>,
  },
  {
    path: '/how-to-play/contestants-2',
    element: <h1>contestants 2</h1>,
  },
  {
    path: '/how-to-play/contestants-3',
    element: <h1>contestants 3</h1>,
  },
  {
    path: '/how-to-play/lifelines',
    element: <h1>lifelines</h1>,
  },
  {
    path: '/how-to-play/scoring-1',
    element: <div>scoring 1</div>,
  },
  {
    path: '/how-to-play/scoring-2',
    element: <div>scoring 2</div>,
  },
  {
    path: '/how-to-play/scoring-3',
    element: <div>scoring 3</div>,
  },
  {
    path: '/how-to-play/scoring-4',
    element: <div>scoring 4</div>,
  },
  {
    path: '/how-to-play/scoring-5',
    element: <div>scoring 5</div>,
  },
]);

export default router;
