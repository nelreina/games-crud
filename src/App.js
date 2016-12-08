import React, { Component } from 'react';
import { Match } from 'react-router';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Sticky from 'react-stickynode';

import './App.css';
import Notisia from './features/Notisia';
import Videos from './features/Videos';
import Intro from './features/Intro';
import AddNewForm from './features/Notisia/AddNewForm';
import UIMessage from './components/UIMessage';
import MainMenu from './components/MainMenu';
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
          <MainMenu disabled={systemError}/>
            <div className="ui four column stackable grid">
              <div className="column computer only four wide">
								<Sticky enabled top={50}>
									<div className="">
										<ul className="ui vertical menu">
										  <li className="item">
										    <a href="#1">Hudisial</a>
										  </li>
										  <li className="item">
										    <a href="#2">Lokal</a>
										  </li>
										  <li className="item">
										    <a href="#3">Internashonal</a>
										  </li>
										  <li className="item">
										    <a href="#4">Polis</a>
										  </li>
										</ul>
									</div>
								</Sticky>
              </div>
              <div className="column seven wide computer nine wide tablet">
                <Match exactly pattern="/" component={Intro}/>
                <Match exactly pattern="/notisia" component={Notisia}/>
                <Match exactly pattern="/videos" component={Videos}/>
                <Match pattern="/notisia/nobo" component={AddNewForm} />
              </div>
              <div className="column five wide computer seven wide tablet">
                <Sticky top={50}>
                  <div className="ui pega fluid segment">
                    &nbsp;
                    Profesional
                  </div>
                </Sticky>
              </div>

            </div>
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
