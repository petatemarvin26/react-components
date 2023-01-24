import {MouseEvent, CSSProperties} from 'react';
type Props = {
  viewRef?: any;
  style?: CSSProperties;
  children?: any;
  className?: string;
  id?: string;
  onClick?: (event: MouseEvent<HTMLDivElement> | any) => void;
  onDrop?: (event: MouseEvent<HTMLDivElement> | any) => void;
  onDragOver?: (event: MouseEvent<HTMLDivElement> | any) => void;
};

type States = {};

export type {Props, States};
