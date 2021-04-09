import React from 'react';
import './styles/global.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { PageIndex } from './pages';
import CounterPage from './pages/counter';
import AboutPage from './pages/about';


const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="nav">
          <NavLink exact className="nav-item" to="/">Home</NavLink>
          <NavLink className="nav-item" to="/counter">Counter</NavLink>
          <NavLink className="nav-item" to="/about">About</NavLink>
        </nav>
        
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
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
