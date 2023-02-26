import React from 'react';

import { useRecipesContext } from '@App/App';
import Card from '@pages/Recipes/components/Card';
import { useNavigate } from 'react-router-dom';

import styles from './Cards.module.scss';

const Cards: React.FC = () => {
  const { recipes, error } = useRecipesContext();
  let navigate = useNavigate();

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.cards__wrapper}>
          {error && <div>{error}</div>}
          {recipes &&
            recipes.map((recipe) => (
              <div key={recipe.id} className={styles.cards__item}>
                <Card recipe={recipe} onClick={() => navigate(`${recipe.id}`)} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

//   // !!! Не рабочий код

// import React from 'react';

// import { useRecipesContext } from '@App/App';
// import Loader from '@components/Loader';
// import Card from '@pages/Recipes/components/Card';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useNavigate } from 'react-router-dom';

// import styles from './Cards.module.scss';

// const Cards: React.FC = () => {
//   let navigate = useNavigate();
//   const { recipes, error, hasMore, fetchRecipes } = useRecipesContext();

//   const fetchMoreRecipes = async () => {
//     const offset = recipes.length;
//     await fetchRecipes(offset);
//   };

//   return (
//     <div>
//       <InfiniteScroll
//         dataLength={recipes.length}
//         next={fetchMoreRecipes}
//         hasMore={hasMore}
//         loader={<Loader />}
//         endMessage={<p>All is loading!</p>}
//       >
//         <div className={styles.wrapper}>
//           <div className={styles.cards__wrapper}>
//             {error && <div>{error}</div>}
//             {recipes &&
//               recipes.map((recipe) => (
//                 <div key={recipe.id} className={styles.cards__item}>
//                   <Card recipe={recipe} onClick={() => navigate(`${recipe.id}`)} />
//                 </div>
//               ))}
//           </div>
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default Cards;

// // !!! Не рабочий код
