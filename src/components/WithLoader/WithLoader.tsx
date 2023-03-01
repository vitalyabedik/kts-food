import React from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
  size?: LoaderSize;
}>;

const WithLoader: React.FC<WithLoaderProps> = ({ loading, children, size }) => {
  return (
    <>
      {loading && <Loader size={size} />}
      {children}
    </>
  );
};

export default WithLoader;
