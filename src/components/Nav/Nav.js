import React from 'react';

import NavList from './NavList';
import NavInput from './NavInput';

import './Nav.css';

export default function Nav({ 
  names, 
  filteredNames, 
  updateNames,
}) {
  return (
    <nav className="col-md-2">
      <NavInput names={names} updateNames={updateNames} />
      <NavList names={filteredNames} />
    </nav>
  );
}