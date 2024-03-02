import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';
import { Overview, Lifelines } from '@ui/views/HowToPlay';
import { KeepReading } from '@ui/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'how-to-play',
    element: <Overview />,
    children: [
      {
        path: 'hosts',
        element: <div />,
        children: [
          {
            path: '1',
            element: <KeepReading />,
          },
          {
            path: '2',
            element: <KeepReading />,
          },
          {
            path: '3',
            element: <KeepReading />,
          },
        ],
      },
      {
        path: 'contestants',
        element: <KeepReading />,
        children: [
          {
            path: '1',
            element: <KeepReading />,
          },
          {
            path: '2',
            element: <KeepReading />,
          },
          {
            path: '3',
            element: <KeepReading />,
          },
        ],
      },
      {
        path: 'lifelines',
        element: <Lifelines />,
      },
      {
        path: 'scoring',
        element: <div />,
        children: [
          {
            path: '1',
            element: <KeepReading />,
          },
          {
            path: '2',
            element: <KeepReading />,
          },
          {
            path: '3',
            element: <KeepReading />,
          },
          {
            path: '4',
            element: <KeepReading />,
          },
          {
            path: '5',
            element: <KeepReading />,
          },
        ],
      },
    ],
  },
]);

export default router;
