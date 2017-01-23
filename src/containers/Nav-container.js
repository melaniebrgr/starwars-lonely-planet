import React, { Component } from 'react';

import Nav from '../components/Nav/Nav';

export default class NavContainer extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }

    this.onInputChange = this.onInputChange.bind(this);
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
      <Nav 
        names={this.props.names} 
        filteredNames={this.state.names} 
        updateNames={this.onInputChange} 
      />
    );
  }
}