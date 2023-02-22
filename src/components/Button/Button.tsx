import React from 'react';

import cn from 'classnames';

import styles from './Button.module.scss';
import Loader, { LoaderSize } from '../Loader/Loader';

export type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ loading, className, children, ...restProps }) => {
  const isDisabled = restProps.disabled || loading;

  const buttonClasses = cn(styles['button'], className, isDisabled && styles['button_disabled']);

  return (
    <button className={buttonClasses} disabled={isDisabled} {...restProps}>
      {loading && <Loader size={LoaderSize.s} className={isDisabled ? 'loader_disabled' : ''} />}
      {children}
    </button>
  );
};

export default Button;
