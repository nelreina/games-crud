import React, { Component } from 'react';
import { connect } from 'react-redux';

import UIHeader from '../../components/UIHeader';
import UIVideo from '../../components/UIVideo';
import { fetchVideos } from './actions';

class VideoPage extends Component {
  componentDidMount() {
    this.props.fetchVideos();
  }
  render() {
    return (
      <div>
        {
          this.props.videonan.map((v) => (
            <UIVideo id={v.videoId} key={v.videoId} >
              <UIHeader grey h3>{v.title}</UIHeader>
            </UIVideo>
          ))
        }
      </div>
    )
  }
}
const mstp = state => ({ videonan: state.videonan });
export default connect(mstp, { fetchVideos })(VideoPage);
