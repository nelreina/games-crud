import React from 'react';
import classnames from 'classnames';
export default (props) => {
  const { visible, title, message, type } = props;
  const menuClass = classnames('ui', 'message', visible, props);
  return (
    <div className={menuClass}>
      <div className="header">
        {title}
      </div>
      <p>{message}</p>
    </div>
  );
};
