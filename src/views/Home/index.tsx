import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import * as LocalStorage from '../../api/localStorage';
import BeerCard from '../../components/BeerCard';
import { Beer } from '../../types';
import styles from './Home.module.css';

const Home = () => {
  const [savedList, setSavedList] = useState<Array<Beer>>(LocalStorage.getFavourites());
  const placeholedrImageUrl = '/beer.jpg';

  useEffect(() => {
    if(savedList.length !== LocalStorage.getFavourites().length){
      setSavedList(LocalStorage.getFavourites())
    }
  }, [savedList]);

  const handleRemoveAllItemsClick = () => {
    LocalStorage.clearFavourites();
    setSavedList([])
  }

  return (
    <>
    <article>
      <section>
        <main className={styles.pageContainer}>
            <img
              alt="Brewary logo"
              className={styles.coverImage}
              src={placeholedrImageUrl}
            />
          <Box className={styles.listContainer}>
            <div className={styles.listHeader}>
              <h3>Favourites</h3>
              <Button variant='contained' size='small' onClick={handleRemoveAllItemsClick}>
                Remove all items
              </Button>
            </div>
            <Grid container spacing={2}>
              {savedList.map((beer) => (
                <Grid key={beer.id} xs={12} sm={6} md={4} lg={3}>
                  <BeerCard favouriteClickHandlerFunction={setSavedList}key={beer.id} beer={beer}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </main>
      </section>
    </article>
    </>
  );
};

export default Home;
