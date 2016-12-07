import React, { Component } from 'react';
import { Match } from 'react-router';
import classnames from 'classnames';
import { connect } from 'react-redux';

import './App.css';
import Notisia from './features/Notisia';
import AddNewForm from './features/Notisia/AddNewForm';
import UIMessage from './components/UIMessage';
import UILink from './components/UILink';
import { clearMessage } from './System/actions';
class App extends Component {
  render() {
    const { systemError, message } = this.props.system;
    const segmentClass = classnames('ui basic segment', { disabled: systemError });
    return (
      <div className="ui container">
        <UIMessage
          massive
          state={systemError ? 'visible' : 'hidden'}
          title={message && message.title}
          variation={message && message.variation}
          >
          {message && message.text}
        </UIMessage>
        <div className={segmentClass}>
          <div className="ui menu inverted three item">
            <UILink to="/" disabled={systemError}>Introdukshon</UILink>
            <UILink to="/notisia" disabled={systemError}>Notisia Awe</UILink>
            <UILink to="/notisia/nobo" disabled={systemError}>Skibi un Nobo</UILink>
          </div>
          <Match exactly pattern="/notisia" component={Notisia}/>
          <Match pattern="/notisia/nobo" component={AddNewForm} />
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
