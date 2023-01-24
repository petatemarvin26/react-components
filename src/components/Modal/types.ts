import {ReactElement} from 'react';

type Props = {
  visible: boolean;
  component?: ReactElement;
  onShowModal: {
    (): void;
  };
  onHideModal: {
    (): void;
  };
};

export type {Props};
