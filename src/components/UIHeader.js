import React from 'react';
import classnames from 'classnames';
export default (props) => {
	const headerClass = classnames('ui header', 'inverted', 'center aligned');
  const { h1, h2, h3, h4, children } = props;
	let header;

  switch (true) {
    case h2:
      header = <h2 className={headerClass}>{children}</h2>
      break;
    case h3:
      header = <h3 className={headerClass}>{children}</h3>
      break;
    case h4:
      header = <h4 className={headerClass}>{children}</h4>
      break;
    default:
      header = <h1 className={headerClass}>{children}</h1>
  }

  return (
    <div className="ui segment basic">
      {header};
    </div>
  )
}
