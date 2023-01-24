import {MouseEvent, CSSProperties} from 'react';

type Props = {
  style?: CSSProperties;
  className?: string;
  children?: any;
  title?: string;
  loading?: boolean;
  onClick?: (event?: MouseEvent<HTMLButtonElement> | any) => void;
};

type States = {};

export type {Props, States};
