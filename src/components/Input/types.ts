import {CSSProperties, ReactElement} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string | number;
  textVisible?: boolean;
  inputType?: 'password' | 'text' | 'number' | 'textarea';
  inputMode?:
    | 'search'
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal';
  multiple?: boolean;
  prefixComponent?: ReactElement;
  suffixComponent?: ReactElement;
  onChangeText?: (text: string) => void;
  onKeyPress?: (key: string) => void;
};

type States = {};

export type {Props, States};
