import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';
import {Indicator} from 'components';

class Button extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {className, style, title, children, loading, onClick} = this.props;

    return (
      <button
        className={`${styles['button']} ${className}`}
        style={style}
        onClick={onClick}
      >
        {loading ? (
          <Indicator.CircleSnail
            color='var(--WHITE)'
            thickness='0.25vh'
            size='2.25vh'
          />
        ) : title ? (
          title
        ) : (
          children
        )}
      </button>
    );
  }
}

export default Button;
