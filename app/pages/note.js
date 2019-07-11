import React from 'react';
import { Link } from 'react-router-dom';

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
        <Header history={this.props.history} title={'记录'} />
        <ul>
          <li><Link to='/lifeCycle'>life cycle</Link><span style={{ marginLeft: '20px', fontWeight: 'bold' }}>TODO</span></li>
          <li><Link to='/cssModule'>css module</Link></li>
          <li><Link to='/setState'>setState的同步和异步</Link></li>
          <li><Link to='/event'>冒泡和阻止默认事件</Link></li>
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
        <BottomBar />
      </Viewport>
    );
  }
}