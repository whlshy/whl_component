import React, { Component } from 'react'
import { BrowserRouter, Router } from 'react-router-dom';
export default class Wrapper extends Component {
  render() {
    return <BrowserRouter>{this.props.children}</BrowserRouter>
  }
}