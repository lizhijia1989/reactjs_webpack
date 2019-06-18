import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/header.css';
export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    console.log('header.js', props);
  }

  goback(e) {
    console.log(e, e.nativeEvent);
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <div style={{ height: '0.5rem' }}>
        <div className={styles.container}>
          <div className={styles.icoBoxLeft}>
            {this.props.history ?
                <span
                  className={`iconfont ${styles.icoBack} ${styles.icoBack}`}
                  onClick={this.goback.bind(this)}
                >&#xe28b;</span> : null}
          </div>
          <h1 className={styles.title}>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}