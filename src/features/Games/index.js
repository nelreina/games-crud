import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';

class GamesPage extends Component {
  componentDidMount = () => {
    this.props.fetchGames();
  }
  render() {
    return (
      <div>
        <h3>Game List</h3>
      </div>
    )
  }
}

const mstp = state => ({ games: state.games });
export default connect( mstp, { fetchGames })(GamesPage);
