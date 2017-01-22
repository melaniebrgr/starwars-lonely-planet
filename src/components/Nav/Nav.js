import React, { Component } from 'react';

import NavList from './NavList';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
  }

  filterNames(names, substr) {
    if (!substr) return names;
    return names.filter(name => name.indexOf(substr) !== -1);
  }

  onInputChange(e) {
    let substr = e.target.value;
    this.setState({
      names: this.filterNames(this.props.names, substr)
    });  
  }

  componentWillReceiveProps() {
    this.setState({
      names: this.props.names
    });
  }

  render() {
    return (
      <nav>
        <input onChange={(e) => this.onInputChange(e)} type="text" placeholder="type planet name here..."/> 
        <ul>
          {this.state.names.map((name, i) => <NavList name={name} key={i} />)}
        </ul>
      </nav>
    );
  }
}