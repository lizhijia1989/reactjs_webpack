import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/index.css';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className={styles.container}>
          <h1 className={styles.title}>首页</h1>
          <h1 className={styles.newTitle}>新标题</h1>
          <div className={`${styles.container} container`}>多类名</div>
        </div>
      </div>
    );
  }
}