import { Dispatch, SetStateAction } from 'react';

export interface Props {
  type: 'sign-up' | 'sign-in';
  setType: Dispatch<SetStateAction<Props['type']>>;
}
