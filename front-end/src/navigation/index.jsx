// @ts-nocheck
import React, { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../components/RootLayout.jsx';
import Dashboard from '../screens/Dashboard/index.jsx';
import Home, { loader as homeLoader } from '../screens/Home/index.js';
import Page404 from '../screens/Page404/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      {
        path: '/dashboard/:userId',
        element: <Dashboard />,
        // loader: dashBoardLoader,
      },
      {
        path: '/dashboard/:userId/:api',
        element: <Dashboard />,
      },
    ],
  },
]);

/**
 * @component Navigation Component
 *
 * @return  {JSX.Element} Routes
 */
function Navigation(props) {
  return <RouterProvider router={router} />;
}

export default Navigation;
