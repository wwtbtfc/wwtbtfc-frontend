import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';
import {
  Overview,
  Lifelines,
  InstructionsLayout,
  Hosts1,
  Hosts2,
  Hosts3,
  Contestants1,
  Contestants2,
  Contestants3,
  Scoring1,
  Scoring2,
  Scoring3,
  Scoring4,
  Scoring5,
} from '@ui/views/HowToPlay';
import { HostLayout } from '@ui/views/HowToPlay/Hosts/HostLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    // InstructionsLayout is a Layout route (https://reactrouter.com/en/main/start/concepts#layout-routes), it has no pathname, but renders its children along with a given layout. This way, we can have unique path names for the Keep Reading navigation, and no blank how-to-play page. Each of the children have a unique pathname: localhost:5137/hosts, for example.
    element: <InstructionsLayout />,
    children: [
      { path: 'overview', element: <Overview /> },
      {
        element: <HostLayout />,
        children: [
          {
            path: 'hosts',
            children: [
              {
                index: true,
                element: <Hosts1 />,
              },
              {
                path: '2',
                element: <Hosts2 />,
              },
              {
                path: '3',
                element: <Hosts3 />,
              },
            ],
          },
        ],
      },
      {
        path: 'contestants',
        children: [
          {
            index: true,
            element: <Contestants1 />,
          },
          {
            path: '2',
            element: <Contestants2 />,
          },
          {
            path: '3',
            element: <Contestants3 />,
          },
        ],
      },
      {
        path: 'lifelines',
        element: <Lifelines />,
      },
      {
        path: 'scoring',
        children: [
          {
            index: true,
            element: <Scoring1 />,
          },
          {
            path: '2',
            element: <Scoring2 />,
          },
          {
            path: '3',
            element: <Scoring3 />,
          },
          {
            path: '4',
            element: <Scoring4 />,
          },
          {
            path: '5',
            element: <Scoring5 />,
          },
        ],
      },
    ],
  },
]);

export default router;
