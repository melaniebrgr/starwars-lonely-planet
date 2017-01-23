import React from 'react';

import NavList from './NavList';
import NavInput from './NavInput';

export default function Nav({ 
  names, 
  filteredNames, 
  updateNames,
}) {
  return (
    <nav>
      <NavInput names={names} updateNames={updateNames} />
      <NavList names={filteredNames} />
    </nav>
  );
}