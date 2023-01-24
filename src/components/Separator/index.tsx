import React from 'react';

import {Props, States} from './types';

class Separator extends React.PureComponent<Props, States> {
  render(): React.ReactNode {
    const {gapX = '', gapY = '', width, height, color} = this.props;

    return (
      <div
        style={{
          margin: `${gapY} ${gapX}`,
          width,
          height,
          background: color,
        }}
      ></div>
    );
  }
}

export default Separator;
