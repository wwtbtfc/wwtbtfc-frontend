import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';
import { Overview, Lifelines } from '@ui/views/HowToPlay';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'how-to-play',
    element: <Overview />,
    children: [
      // {
      //   path: 'hosts',
      //   element: <HostsLayout />,
      //   children: [
      //     {
      //       path: '1',
      //       element: <HostsPage1 />,
      //     },
      //     {
      //       path: '2',
      //       element: <HostsPage2 />,
      //     },
      //     {
      //       path: '3',
      //       element: <HostsPage3 />,
      //     },
      //   ],
      // },
      // {
      //   path: 'contestants',
      //   element: <ContestantsLayout />,
      //   children: [
      //     {
      //       path: '1',
      //       element: <ContestantsPage1 />,
      //     },
      //     {
      //       path: '2',
      //       element: <ContestantsPage2 />,
      //     },
      //     {
      //       path: '3',
      //       element: <ContestantsPage3 />,
      //     },
      //   ],
      // },
      {
        path: 'lifelines',
        element: <Lifelines />,
      },
      // {
      //   path: 'scoring',
      //   element: <ScoringLayout />,
      //   children: [
      //     {
      //       path: '1',
      //       element: <ScoringPage1 />,
      //     },
      //     {
      //       path: '2',
      //       element: <ScoringPage2 />,
      //     },
      //     {
      //       path: '3',
      //       element: <ScoringPage3 />,
      //     },
      //     {
      //       path: '4',
      //       element: <ScoringPage4 />,
      //     },
      //     {
      //       path: '5',
      //       element: <ScoringPage5 />,
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
