import React from 'react';

import cn from 'classnames';

import styles from './Input.module.scss';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, type, placeholder, onChange, className, ...restProps }) => {
  const inputClasses = cn(styles['input'], className, restProps.disabled && styles['input_disabled']);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <input
      {...restProps}
      className={inputClasses}
      onChange={onChangeHandler}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
