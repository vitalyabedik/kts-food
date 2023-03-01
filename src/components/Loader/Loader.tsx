import React from 'react';

import cn from 'classnames';

import styles from './Loader.module.scss';

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ loading = true, size = LoaderSize.m, className }) => {
  const loaderClasses = cn(styles['loader'], className, size && styles[`loader_size-${size}`]);
  if (!loading) return null;

  return (
    <div className="loader__wrapper">
      <div className={loaderClasses}></div> ;
    </div>
  );
};

export default Loader;
