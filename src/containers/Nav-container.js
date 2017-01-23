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
    let substrLowerCase = substr.toLowerCase();
    return names.filter(name => {
      let nameLowerCase = name.toLowerCase();
      return nameLowerCase.indexOf(substrLowerCase) !== -1;
    });
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