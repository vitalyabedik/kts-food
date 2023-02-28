import React from 'react';

import Button from '@components/Button';
import { useNavigate } from 'react-router-dom';

import ReturnIcon from './components/ReturnIcon';
import styles from './ReturnButton.module.scss';

const ReturnButton: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Button className={styles.button_return} onClick={goBack}>
      <ReturnIcon />
    </Button>
  );
};

export default ReturnButton;
