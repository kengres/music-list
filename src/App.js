import React from 'react';
import './styles/global.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { PageIndex } from './pages';
import CounterPage from './pages/counter';


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="nav">
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/counter">Counter</Link>
        </nav>
        
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/">
            <PageIndex />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
