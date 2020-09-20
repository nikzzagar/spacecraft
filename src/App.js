import React from 'react';
import { renderRoutes } from 'react-router-config'
import './App.css';

function App({route}) {
  return (
    <div className="main">
      {renderRoutes(route.routes) }
    </div>

  );
}

export default {component: App};
