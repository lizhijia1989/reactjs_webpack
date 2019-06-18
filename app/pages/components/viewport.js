import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../css/viewport.css';

export default class Viewport extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>{this.props.children}</div>
    );
  }
}