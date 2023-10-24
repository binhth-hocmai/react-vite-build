import HelloWorld from 'app/pages/HelloWorld';
import { useRoutes, useLocation, Navigate } from 'react-router-dom';

import path from './path';

export default function Router() {
  const location = useLocation();

  return useRoutes([
    // {
    //   path: path.root,
    //   element: <Navigate to={path.login} state={{ from: location }} />,
    // },
    {
      path: path.root,
      element: <HelloWorld />,
    },
  ]);
}
