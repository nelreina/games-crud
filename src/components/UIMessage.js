import React from 'react';
import classnames from 'classnames';
export default (props) => {
  const { state, title, variation, icon, children } = props;
  const menuClass = classnames('ui', 'message', state, variation, icon, props);
  const iconClass = classnames('icon', icon);
  return (
    <div className={menuClass}>
      { icon && <i className={iconClass}></i>}
      <div className="content">
        <div className="header">
          {title}
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
};
