import {PureComponent, ReactNode} from 'react';

import styles from './.module.css';
import {Props} from './types';

class Link extends PureComponent<Props> {
  render(): ReactNode {
    const {href, download, className, children} = this.props;
    return (
      <a href={href} download={download} className={`${styles.a} ${className}`}>
        {children}
      </a>
    );
  }
}
export default Link;
