import React from 'react';

import {Props, States} from './types';
import styles from './.module.css';

class Input extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {
      className,
      style,
      inputMode,
      inputType,
      placeholder,
      multiple,
      value,
      textVisible = true,
      prefixComponent,
      suffixComponent,
      onChangeText = () => {},
      onKeyPress = () => {},
    } = this.props;

    const margin_left = !prefixComponent ? 'margin-left' : '';

    return (
      <div className={`${styles['input']} ${className}`}>
        {prefixComponent && (
          <div className={styles['prefix-pane']}>{prefixComponent}</div>
        )}
        <input
          className={`${styles['controller']} ${styles[margin_left]}`}
          style={style}
          placeholder={placeholder}
          value={value}
          type={textVisible ? inputType : 'password'}
          inputMode={inputMode}
          multiple={multiple}
          onChange={({target: {value}}) => onChangeText(value)}
          onKeyUp={({code}) => onKeyPress(code)}
        />
        {suffixComponent && (
          <div className={styles['suffix-pane']}>{suffixComponent}</div>
        )}
      </div>
    );
  }
}

export default Input;
