import React, { Component } from 'react';

import './Header.css';

export default function Header() {
  return(
    <div className="Header">
      <h1 className="Header__title">{`The Lonely Planets' guide to Star Wars`}</h1>
      <p className="Header__intro">
        Advice and information for the Star Wars universe traveller.
      </p>          
    </div>
  )
}