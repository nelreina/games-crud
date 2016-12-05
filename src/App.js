import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import './App.css';

import Games from './features/Games';
import AddNewForm from './features/Games/AddNewForm';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>Crud Games</h1>
        <div className="ui menu three item">
          <Link activeOnlyWhenExact to="/" className="item" activeClassName="active">Home</Link>
          <Link activeOnlyWhenExact to="/games" className="item" activeClassName="active">Games</Link>
          <Link activeOnlyWhenExact to="/games/new" className="item" activeClassName="active">Add new Game</Link>
        </div>
        <Match exactly pattern="/games" component={Games}/>
        <Match pattern="/games/new" component={AddNewForm} />
      </div>
    );
  }
}

export default App;
