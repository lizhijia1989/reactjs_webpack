import React from 'react';

import Viewport from './components/viewport.js';
import Header from './components/header.js';

export default class SetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'default',
      value: ''
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  handleBlur = e => {
    this.setState({
      text: e.target.value
    }, () => {
      console.log('callback', this.state.text);
    });
    console.log('after', this.state.text);
  }

  handleClick = e => {
    setTimeout(() => {
      this.setState({
        text: 'default'
      }, () => {
        console.log('callback', this.state.text);
      });
      console.log('after', this.state.text);
    }, 0)
  }

  render() {
    return (
      <Viewport>
        <Header history={this.props.history} title="setState的同步和异步" />
        <p>text: {this.state.text}</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} onBlur={this.handleBlur} />
        <input type="button" value="点击" style={{ marginLeft: '10px' }} onClick={this.handleClick} />
      </Viewport>
    );
  }
}