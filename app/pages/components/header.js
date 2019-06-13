import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='/'>index</Link></li>
        <li><Link to='/login'>login</Link></li>
      </ul>
    );
  }
}