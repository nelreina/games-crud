import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';
import NotisiaItem from './NotisiaItem';
class GamesPage extends Component {
  componentDidMount = () => {
    this.props.fetchGames();
  }
  render() {
    const { notisia } = this.props;
    return (
      <div className="ui three column stackable grid">
        <div className="column five wide"></div>
        <div className="column eight wide">
          {
            notisia.map((noti, idx) => <NotisiaItem key={idx} {...noti} />)
          }
        </div>
        <div className="column three wide"></div>
      </div>
    )
  }
}

const mstp = state => ({ notisia: state.notisianan });
export default connect( mstp, { fetchGames })(GamesPage);
