import React from 'react';

export default function NavInput({ 
  names, 
  updateNames,
}) {
  return (
      <input className="form-control" onChange={(e) => updateNames(e)} type="text" placeholder="Enter a planet..."/>
  );
}