import React from 'react';
import UILink from './UILink';

export default ({ disabled }) => (
  <div className="ui menu inverted fixed four item">
    <div className="ui container">
      <UILink to="/" disabled={disabled}>Sa di Nos</UILink>
      <UILink to="/notisia" disabled={disabled}>Notisia Awe</UILink>
      <UILink to="/videos" disabled={disabled}>Videos</UILink>
      <UILink to="/notisia/nobo" disabled={disabled}>Skibi un Nobo</UILink>
    </div>
  </div>
)
