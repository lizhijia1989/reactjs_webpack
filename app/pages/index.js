import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/index.css';
import Viewport from './components/viewport.js';
import Header from './components/header.js';
import BottomBar from './components/bottomBar.js';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log('index.js', props);
  }

  render() {
    return (
      <Viewport>
        <Header title={'首页'} />
        <div className={styles.container}>
          <ul>
            <li><Link to='/cssModule'>cssModule</Link></li>
            <li><Link to='/login'>login</Link></li>
          </ul>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
          <p>1<br/><br/><br/><br/></p>
        </div>
        <BottomBar />
      </Viewport>
    );
  }
}