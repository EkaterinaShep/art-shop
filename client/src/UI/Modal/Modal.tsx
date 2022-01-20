import React, { Dispatch, FC, SetStateAction } from 'react';
import './Modal.scss';

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<Props> = ({ active, setActive, children }) => {
  return (
    <div className='modal'>
      <div className='modal__content'>{children}</div>
    </div>
  );
};

export default Modal;
