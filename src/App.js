import React, { Component } from 'react';
import { Match } from 'react-router';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './App.css';
import Games from './features/Games';
import AddNewForm from './features/Games/AddNewForm';
import UIMessage from './components/UIMessage';
import UILink from './components/UILink';
import { clearMessage } from './System/actions';
class App extends Component {
  render() {
    const { systemError, message } = this.props.system;
    const segmentClass = classnames('ui basic segment', { disabled: systemError });
    return (
      <div className="ui center aligned container">
        <UIMessage
          massive
          state={systemError ? 'visible' : 'hidden'}
          title={message && message.title}
          variation={message && message.variation}
          >
          {message && message.text}
        </UIMessage>
        <div className={segmentClass}>
          <div className="ui menu three item">
            <UILink to="/" disabled={systemError}>Home</UILink>
            <UILink to="/games" disabled={systemError}>Games</UILink>
            <UILink to="/games/new" disabled={systemError}>New Game</UILink>
          </div>
          <Match exactly pattern="/games" component={Games}/>
          <Match pattern="/games/new" component={AddNewForm} />
        </div>
        {
          systemError &&
          <button className="ui button red large" onClick={this.props.clearMessage}>
            Clear Error
          </button>
        }
      </div>
    );
  }
}
const mstp = (state) => ({system: state.system});
export default connect(mstp, { clearMessage })(App);
