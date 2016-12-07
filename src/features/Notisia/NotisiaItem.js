import React from 'react';
import classnames from 'classnames';

// import S from 'string';
export default (
  { titulo,
    kategoria,
    origen,
    diskripshon,
    potret,
    dia,
    enkorto
  }) => {
	const segment = classnames('ui raised segment');
	return (
  <div className={segment}>
    <a className="ui blue ribbon uppercase label">{kategoria}</a>
		<h2 className="ui header">{titulo}
      <p className="sub header teal">
        {dia} | {origen}
      </p>
    </h2>
    <div className="ui huge image">
      <img src={potret} alt=""/>
    </div>
    <h3>{enkorto}</h3>
    <button className="ui fluid button blue large">
      Lesa Mas
    </button>
  </div>
)}
