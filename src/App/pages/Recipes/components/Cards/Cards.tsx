import React from 'react';

import { useRecipesContext } from '@App/App';
import Loader from '@components/Loader';
import Card from '@pages/Recipes/components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

import styles from './Cards.module.scss';

const Cards: React.FC = () => {
  const { recipes, error, hasMore, fetchMoreRecipes } = useRecipesContext();

  const fetchNextRecipes = async () => {
    const offset = recipes.length;

    await fetchMoreRecipes(offset);
  };

  return (
    <div>
      {recipes ? (
        <InfiniteScroll
          dataLength={recipes.length}
          next={fetchNextRecipes}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<p>All is loading!</p>}
        >
          <div className={styles.wrapper}>
            <div className={styles.cards__wrapper}>
              {error && <div>{error}</div>}
              {recipes &&
                recipes.map((recipe) => (
                  <Link key={recipe.id} to={`${recipe.id}`}>
                    <Card className={styles.cards__item} recipe={recipe} />
                  </Link>
                ))}
            </div>
          </div>
        </InfiniteScroll>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Cards;
