import React from 'react';

import { useRecipesContext } from '@App/App';
import Loader from '@components/Loader';
import Search from '@components/Search';
import Cards from '@pages/Recipes/components/Cards';

import styles from './Recipes.module.scss';

const Recipes: React.FC = () => {
  const { isLoading } = useRecipesContext();
  const [text, setText] = React.useState('');

  const handleChange = (value: string): void => {
    setText(value);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header__wrapper}>
        <Search value={text} onChange={handleChange} />
      </header>
      <main className={styles.wrapper}>{isLoading ? <Loader className="mainLoader" /> : <Cards />}</main>
    </div>
  );
};

export default Recipes;
