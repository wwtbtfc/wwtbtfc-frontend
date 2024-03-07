import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';
import { Overview, Lifelines, HowToPlay } from '@ui/views/HowToPlay';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    // Home is a Layout route (https://reactrouter.com/en/main/start/concepts#layout-routes), it has no pathname, but renders its children along with a given layout. This way, we can have unique path names for the Keep Reading navigation, and no blank how-to-play page. Each of the children have a unique pathname: localhost:5137/hosts, for example.
    element: <HowToPlay />,
    children: [
      { path: 'overview', element: <Overview /> },
      {
        path: 'hosts',
        element: <div className="hosts" />,
        children: [
          {
            path: '1',
            element: <div />,
          },
          {
            path: '2',
            element: <div />,
          },
          {
            path: '3',
            element: <div />,
          },
        ],
      },
      {
        path: 'contestants',
        element: <div />,
        children: [
          {
            path: '1',
            element: <div />,
          },
          {
            path: '2',
            element: <div />,
          },
          {
            path: '3',
            element: <div />,
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
            element: <div />,
          },
          {
            path: '2',
            element: <div />,
          },
          {
            path: '3',
            element: <div />,
          },
          {
            path: '4',
            element: <div />,
          },
          {
            path: '5',
            element: <div />,
          },
        ],
      },
    ],
  },
]);

export default router;
