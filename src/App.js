import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import './App.css';
import classnames from 'classnames';
import Games from './features/Games';
import AddNewForm from './features/Games/AddNewForm';
import UIMessage from './components/UIMessage';

class App extends Component {
  state = { systemError: false };
  toggleSystemError = () => {
    this.setState( { systemError: !this.state.systemError } )
  }
  render() {
    const { systemError } = this.state;
    const segmentClass = classnames('ui', 'basic segment', { disabled: systemError, loading: systemError });
    const menuItemClass = classnames('item', { disabled: systemError });
    return (
      <div className="ui container">
        <UIMessage
          floating
          state={systemError ? 'visible' : 'hidden'}
          title='Sytem Error'
          variation='error'
          icon="warning"
          >
          System is offline at this moment
        </UIMessage>
        <div className={segmentClass}>
          <h1>Crud Games</h1>
          <div className="ui menu three item">
            <Link activeOnlyWhenExact to="/" className={menuItemClass} activeClassName="active">Home</Link>
            <Link activeOnlyWhenExact to="/games" className={menuItemClass} activeClassName="active">Games</Link>
            <Link activeOnlyWhenExact to="/games/new" className={menuItemClass} activeClassName="active">Add new Game</Link>
          </div>
          <Match exactly pattern="/games" component={Games}/>
          <Match pattern="/games/new" component={AddNewForm} />
        </div>
        <button className="ui button red large" onClick={this.toggleSystemError}>
          Toggle system error { systemError ? 'OFF' : 'ON'}
        </button>
      </div>
    );
  }
}

export default App;
