import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';

class InputArea extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {
      className,
      style,
      inputMode,
      placeholder,
      value,
      onChangeText = () => {},
    } = this.props;

    return (
      <textarea
        className={`${styles['textarea']} ${className}`}
        style={style}
        placeholder={placeholder}
        value={value}
        inputMode={inputMode}
        onChange={({target: {value}}) => onChangeText(value)}
      />
    );
  }
}

export default InputArea;
