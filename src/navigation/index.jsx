// @ts-nocheck
import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../screens/Dashboard/index.jsx';
import Home from '../screens/Home/index.js';
import Page404 from '../screens/Page404/index.jsx';

/**
 * @component Navigation Component
 *
 * @return  {JSX.Element} Routes
 */
function Navigation(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:userId" element={<Dashboard />} />
      <Route path="/dashboard/:userId/:api" element={<Dashboard />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default Navigation;
