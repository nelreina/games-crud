import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';
import NotisiaItem from './NotisiaItem';
class NotisiaPage extends Component {
  componentDidMount = () => {
    this.props.fetchGames();
  }
  render() {
    const { notisianan } = this.props;
    return (
        <div className="">
          {
            notisianan.map((noti, idx) => <NotisiaItem key={idx} {...noti} />)
          }
        </div>
    )
  }
}

const mstp = ({ notisianan }) => ({ notisianan });
export default connect( mstp, { fetchGames })(NotisiaPage);
