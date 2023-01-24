import React from 'react';

import {Props} from './types';
import styles from './.module.css';

class ProgressBar extends React.PureComponent<Props> {
  render(): React.ReactNode {
    const {backgroundColor, barColor, progress, className, roundCorder} =
      this.props;

    return (
      <div
        className={`${styles.progressBarPane} ${className}`}
        style={{backgroundColor, borderRadius: `${roundCorder}vmin`}}
      >
        <div
          className={styles.bar}
          style={{backgroundColor: barColor, width: `${progress}%`}}
        />
      </div>
    );
  }
}

export default ProgressBar;
