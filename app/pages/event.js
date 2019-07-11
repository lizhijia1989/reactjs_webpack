import React from 'react';

import Viewport from './components/viewport.js';
import Header from './components/header.js';

export default class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOuter = e => {
    e.stopPropagation();
    console.log('handleClickOuter');
  }

  handleClickInner = e => {
    // e.stopPropagation();
    console.log('handleClickInner');
  }

  handleClickButton = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log('handleClickButton');
  }

  handleClickLink = e => {
    // e.preventDefault();
    e.stopPropagation();
    console.log('handleClickLink');
  }

  render() {
    return (
      <Viewport>
        <Header history={this.props.history} title="冒泡和默认事件" />
        <div style={{ width: '3rem', height: '3rem', backgroundColor: 'red' }} onClick={this.handleClickOuter}>
          <div style={{ width: '2rem', height: '2rem', backgroundColor: 'blue' }} onClick={this.handleClickInner}>
            <form action="">
              <input type="submit" value="点击" onClick={this.handleClickButton} />
              <a href="###" style={{ color: '#fff' }} onClick={this.handleClickLink}>点击</a>
            </form>
          </div>
        </div>
      </Viewport>
    );
  }
}