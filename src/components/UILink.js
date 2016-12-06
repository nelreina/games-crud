import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

export default (props) => {
  const { to, children, disabled } = props;
  const itemClass = classnames('item', {disabled});
  const link =
    <Link
      to={to}
      className={itemClass}
      activeOnlyWhenExact
      activeClassName="active">
      {children}
    </Link>
  const item = <div className={itemClass}>{children}</div>
  return disabled ? item : link
}
