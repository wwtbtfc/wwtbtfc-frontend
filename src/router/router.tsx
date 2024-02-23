import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@ui/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/how-to-play',
    element: <HomePage />,
  },
]);

export default router;
