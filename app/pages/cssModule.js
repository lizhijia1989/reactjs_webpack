import React from 'react';

import Viewport from './components/viewport.js';
import Header from './components/header.js';
import styles from '../css/cssModule.css';

export default class CssModule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Viewport>
        <Header history={this.props.history} title="css module" />
        <div className={styles.container}>
          <h1 className={styles.title}>CSS Module</h1>
          <h1 className={styles.newTitle}>子标题</h1>
          <div className={`${styles.container} iconfont`}>多类名</div>
        </div>
      </Viewport>
    );
  }
}