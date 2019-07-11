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
        <div>
          <ul>
            <li><Link to='/cssModule'>css module</Link></li>
            <li><Link to='/setState'>setState</Link></li>
            <li><Link to='/event'>event</Link></li>
            <li><Link to='/lifeCycle'>life cycle</Link></li>
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