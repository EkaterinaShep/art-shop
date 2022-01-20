import { FC } from 'react';
import './Btn.scss';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  text: string;
}

const Btn: FC<Props> = ({ type = 'button', className, text }) => {
  return (
    <button className={'btn ' + className} type={type}>
      {text}
    </button>
  );
};

export default Btn;
