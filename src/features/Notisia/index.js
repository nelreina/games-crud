import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';
import NotisiaItem from './NotisiaItem';
class NotisiaPage extends Component {
  componentDidMount = () => {
    this.props.fetchGames();
  }
  render() {
    const { notisia } = this.props;
    return (
        <div className="">
          {
            notisia.map((noti, idx) => <NotisiaItem key={idx} {...noti} />)
          }
        </div>
    )
  }
}

const mstp = state => ({ notisia: state.notisianan });
export default connect( mstp, { fetchGames })(NotisiaPage);
