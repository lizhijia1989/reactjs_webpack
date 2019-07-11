import React from 'react';
import { Link } from 'react-router-dom';

import Viewport from './components/viewport.js';
import Header from './components/header.js';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log('index.js', props);
  }

  render() {
    return (
      <Viewport>
        <Header title={'首页'} />
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/note">note</Link></li>
        </ul>
        <span className="logo"></span>
        <span className="logo logo_relative"></span>
      </Viewport>
    );
  }
}