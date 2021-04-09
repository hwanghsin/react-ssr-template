import React from 'react';
import { renderRoutes } from 'react-router-config';

import Header from './pages/Header';
import Side from './pages/Side';

const App = ({ location, route }) => {
  return (
    <div className='d-flex'>
      {location.pathname !== '/login' && <Side />}
      <main className={`position-relative${location.pathname !== '/login' ? ' outer-container' : ' login-bg'}`}>
        {location.pathname !== '/login' && <Header />}
        {renderRoutes(route.routes)}
      </main>
    </div>
  );
};

export default {
  component: App
};