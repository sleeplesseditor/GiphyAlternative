import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Create from './components/Create';

const App = () => {
      console.log('App component is running');
      return (
          <BrowserRouter>
            <div className="container">
              <Route path="/" component={Dashboard} />
              <Route path="/create" component={Create} />
            </div>
          </BrowserRouter>
      );
}

export default App;
