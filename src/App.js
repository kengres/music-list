import React, { Component } from 'react';
import Button from './components/button/Button';
import './styles/global.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, world!</h1>
        <p>Of course it needs to be pink</p>
        <div className="buttons">
          <Button type="default">Info Button</Button>
          <Button type="info">Info Button</Button>
          <Button type="warning">Warning Button</Button>
          <Button type="danger">Danger Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
