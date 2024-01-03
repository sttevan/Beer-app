import { useEffect, useState } from 'react';
import { Beer } from '../../types';
import { Button, Paper} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './Home.module.css';
import * as LocalStorage from '../../api/localStorage';
import BeerCard from '../../components/BeerCard';

const Home = () => {
  const [savedList, setSavedList] = useState<Array<Beer>>(LocalStorage.getFavourites());
  const placeholedrImageUrl = '/beer.jpg';

  useEffect(() => {
    console.log(savedList.length, LocalStorage.getFavourites().length)
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
          <Paper>
            <img
              alt="Brewary logo"
              className={styles.coverImage}
              src={placeholedrImageUrl}
            />
          </Paper>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Favourites</h3>
                <Button variant='contained' size='small' onClick={handleRemoveAllItemsClick}>
                  Remove all items
                </Button>
              </div>
              <Grid container spacing={2}>
                {savedList.map((beer) => (
                  <Grid key={beer.id} xs={12} sm={6} md={4} lg={3}>
                    <BeerCard key={beer.id} beer={beer}/>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Paper>
        </main>
      </section>
    </article>
    </>
  );
};

export default Home;
