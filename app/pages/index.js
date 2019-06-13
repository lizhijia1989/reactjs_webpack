import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/index.css';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'container'}>
        <h1 className={styles.title}>首页</h1>
        <p>这是文章</p>
      </div>
    );
  }
}