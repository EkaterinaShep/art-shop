import React, { FC, HTMLInputTypeAttribute, LegacyRef } from 'react';
import './Input.scss';

interface Props {
  label?: boolean;
  labelText?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  inputClassName?: string;
  placeholder?: string;
}

const Input: FC<Props> = ({
  label = false,
  labelText = '',
  name,
  type = 'text',
  inputClassName,
  placeholder = '',
}) => {
  if (label) {
    return (
      <label>
        <span>{labelText}</span>
        <input
          name={name}
          className={'input ' + inputClassName}
          type={type}
          placeholder={placeholder}
        />
      </label>
    );
  }

  return (
    <input
      name={name}
      className={'input ' + inputClassName}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
