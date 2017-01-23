import React from 'react';

import NavListItem from './NavListItem';

export default function NavList({ names }) {
  return (
    <ul>
      {names.map((name, i) => <NavListItem name={name} key={i} />)}
    </ul>
  );
}