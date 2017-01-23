import React from 'react';

export default function NavInput({ names, updateNames }) {
  return (
      <input onChange={(e) => updateNames(e)} type="text" placeholder="type planet name here..."/>
  );
}