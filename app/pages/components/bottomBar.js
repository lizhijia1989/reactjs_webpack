import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/bottomBar.css';
export default class BottomBar extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}></div>
      </div>
    );
  }
}