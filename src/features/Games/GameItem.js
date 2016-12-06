import React from 'react';
export default ({ title, cover }) => (
  <div className="ui link card">
    <div className="content">
      <div className="header">{title}</div>
    </div>
    <div className="ui image">
      <img  alt="cover" src={cover}/>
    </div>
    <div className="content">
      <div className="meta">06-12-2016</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
   </div>
 )
