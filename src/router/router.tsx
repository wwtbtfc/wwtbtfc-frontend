import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/how-to-play/',
    element: <div>how to play</div>,
    children: [
      {
        path: 'hosts-1',
        element: <h1>hosts page 1</h1>,
      },
      {
        path: 'hosts-2',
        element: <h1>hosts page 2</h1>,
      },
      {
        path: 'hosts-3',
        element: <h1>hosts page 3</h1>,
      },
      {
        path: 'contestants-1',
        element: <h1>contestants 1</h1>,
      },
      {
        path: 'contestants-2',
        element: <h1>contestants 2</h1>,
      },
      {
        path: 'contestants-3',
        element: <h1>contestants 3</h1>,
      },
      {
        path: 'lifelines',
        element: <h1>lifelines</h1>,
      },
      {
        path: 'scoring-1',
        element: <div>scoring 1</div>,
      },
      {
        path: 'scoring-2',
        element: <div>scoring 2</div>,
      },
      {
        path: 'scoring-3',
        element: <div>scoring 3</div>,
      },
      {
        path: 'scoring-4',
        element: <div>scoring 4</div>,
      },
      {
        path: 'scoring-5',
        element: <div>scoring 5</div>,
      },
    ],
  },
]);

export default router;
