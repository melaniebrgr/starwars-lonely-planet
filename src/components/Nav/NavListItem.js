import React from 'react';
import { Link } from 'react-router';

export default function NavListItem({name}) {
  return (
    <li><Link to={`/planets/${name.toLowerCase()}`} activeClassName="active">{name}</Link></li>
  );
}