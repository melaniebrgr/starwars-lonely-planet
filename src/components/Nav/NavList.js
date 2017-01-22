import React from 'react';
import { Link } from 'react-router';

export default function NavList({planet}) {
  return (
    <li><Link to={`/planets/${planet.name.toLowerCase()}`} activeClassName="active">{planet.name}</Link></li>
  );
}