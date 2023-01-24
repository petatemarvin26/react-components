import {CSSProperties} from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  inputMode?:
    | 'search'
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal';
  onChangeText?: (text: string) => void;
};

type States = {};

export type {Props, States};
