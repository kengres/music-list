import React from 'react';
import './styles/global.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import importedComponent from "react-imported-component";


const Home = importedComponent(() => import(/* webpackChunkName:'home' */ './pages'), { LoadingComponent: Loading });
const CounterPage = importedComponent(() => import(/* webpackChunkName:'counter' */ './pages/counter'), { LoadingComponent: Loading });
const AboutPage = importedComponent(() => import(/* webpackChunkName:'about' */ './pages/about'), { LoadingComponent: Loading });


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
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
