import {PureComponent, ReactNode} from 'react';

import {Props} from './types';
import styles from './.module.css';

class Modal extends PureComponent<Props> {
  render(): ReactNode {
    const {component, visible, onHideModal} = this.props;
    return (
      visible && (
        <div
          className={styles['modal']}
          onClick={(e) => {
            if (e.currentTarget.isEqualNode(e.target as Node)) {
              onHideModal();
            }
          }}
        >
          {component}
        </div>
      )
    );
  }
}

export default Modal;
