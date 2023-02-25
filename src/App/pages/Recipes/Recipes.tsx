import React from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import MultiDropdown from '@components/MultiDropdown';
import SearchIcon from '@components/SearchIcon';
import Cards from '@pages/Recipes/components/Cards';
import cn from 'classnames';
import { RecipeCardTypes } from 'src/types/RecipeCardTypes';

import styles from './Recipes.module.scss';

/** Вариант для выбора в фильтре */
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

const Recipes: React.FC = () => {
  const [text, setText] = React.useState('');

  const handleChange = (value: string): void => {
    setText(value);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header__wrapper}>
        <div className={styles.header__items}>
          <Input placeholder={'Search'} value={text} onChange={handleChange} />
          <Button className={styles.header__button}>
            <SearchIcon />
          </Button>
        </div>
      </header>
      <main className={styles.wrapper}>
        <Cards />
      </main>
      {/* <MultiDropdown
        options={options}
        pluralizeOptions={pluralizeOptions}
        value={pickedValues}
        onChange={handleSelect}
      /> */}
    </div>
  );
};

export default Recipes;
