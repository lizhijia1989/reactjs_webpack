import React from 'react';

import Viewport from './components/viewport.js';
import Header from './components/header.js';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleClick(bool, e) {
    if (bool) {
      this.forceUpdate();
    } else {
      this.setState({
        text: this.state.text ? '' : 'text'
      });
    }
  }

  render() {
    return (
      <Viewport>
        <Header history={this.props.history} title="life cycle" />
        <input type="button" value="点击" onClick={this.handleClick.bind(this, false)} />
        <input type="button" value="点击" onClick={this.handleClick.bind(this, true)} />
        <LifeCycleComponent text={this.state.text} />
      </Viewport>
    );
  }
}

class LifeCycleComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps 新', arguments);
  //   return null;
  // }

  componentDidMount() {
    console.log('componentDidMount');
  };

  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps 废弃');
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate 新', arguments);
  // }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate');
  };

  componentDidCatch(error, info) {
    console.log('componentDidCatch 新', arguments);
  }

  render() {
    console.log('render')
    return (
      <div>{this.props.text}</div>
    );
  }
}