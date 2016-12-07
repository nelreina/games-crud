import React from 'react';
import classnames from 'classnames';
import moment from 'moment';

import S from 'string';
export default (
  { titulo,
    kategoria,
    origen,
    diskripshon,
    potret,
    dia,
  }) => {
	const segment = classnames('ui raised segment');
	return (
  <div className={segment}>
    <a className="ui blue ribbon uppercase label">{kategoria}</a>
		<h2 className="ui header">{titulo}
      <p className="sub header teal">
        {moment(dia).format('MMMM DD, YYYY')} | {origen}
      </p>
    </h2>
    <div className="ui huge image">
      <img src={potret} alt=""/>
    </div>
    <h4>{S(diskripshon).truncate(128).s}</h4>
    <button className="ui fluid button blue large">
      Lesa Mas
    </button>
  </div>
)}
