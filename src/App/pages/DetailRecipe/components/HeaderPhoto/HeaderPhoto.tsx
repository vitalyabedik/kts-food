import React from 'react';

import ReturnButton from '@components/ReturnButton';

import styles from './HeaderPhoto.module.scss';

export type HeaderPhotoProps = {
  image: string;
};

const HeaderPhoto: React.FC<HeaderPhotoProps> = ({ image }) => {
  return (
    <>
      <ReturnButton />
      <img className={styles[`header-photo__image`]} src={image} alt="menu__img" />
    </>
  );
};

export default HeaderPhoto;
