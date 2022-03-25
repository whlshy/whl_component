import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
export default class Wrapper extends Component {
  render() {
    return <Router>{this.props.children}</Router>
  }
}