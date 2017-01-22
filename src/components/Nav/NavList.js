import React from 'react';
import { Link } from 'react-router';

export default function NavList({name}) {
  return (
    <li><Link to={`/planets/${name.toLowerCase()}`} activeClassName="active">{name}</Link></li>
  );
}