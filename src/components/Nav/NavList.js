import React from 'react';

import NavListItem from './NavListItem';

export default function NavList({ 
  names,
}) {
  return (
    <ul className="nav nav-pills nav-stacked">
      {names.map((name, i) => <NavListItem name={name} key={i} />)}
    </ul>
  );
}