import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';
import GameItem from './GameItem';
class GamesPage extends Component {
  componentDidMount = () => {
    this.props.fetchGames();
  }
  render() {
    const { games } = this.props;
    return (
      <div>
        <h3>Game List</h3>
        <div className="ui basic segment left aligned">
          <div className="ui tiny cards  ">
            {
              games.map((game, idx) => <GameItem key={idx} {...game} />)
            }
          </div>
        </div>
      </div>
    )
  }
}

const mstp = state => ({ games: state.games });
export default connect( mstp, { fetchGames })(GamesPage);
