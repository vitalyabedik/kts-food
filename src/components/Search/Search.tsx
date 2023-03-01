import React from 'react';

import Button from '@components/Button';
import Input from '@components/Input';

import SearchIcon from './components/SearchIcon';
import styles from './Search.module.scss';

export type SearchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className={styles.search__items}>
      <Input placeholder={'Search'} value={value} onChange={onChange} />
      <Button className={styles.search__button}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
