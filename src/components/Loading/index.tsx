import {PureComponent, ReactNode} from 'react';
import {Indicator} from 'components';

import {Props} from './types';
import styles from './.module.css';

class Loading extends PureComponent<Props> {
  render(): ReactNode {
    const {visible} = this.props;
    return (
      visible && (
        <div className={styles['loading']}>
          <Indicator.CircleSnail
            size='4vh'
            thickness='0.5vh'
            color='var(--ACCENT-COLOR4)'
            anchorStyle='round'
          />
        </div>
      )
    );
  }
}
export default Loading;
