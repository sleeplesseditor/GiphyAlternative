import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Callback from './components/Callback';

const App = () => {
      console.log('App component is running');
      return (
          <BrowserRouter>
            <div className="container">
              <Route exact path="/" component={Dashboard} />
              <Route path="/create" component={Create} />
              <Route path="/callback" component={Callback} />
            </div>
          </BrowserRouter>
      );
}

export default App;
