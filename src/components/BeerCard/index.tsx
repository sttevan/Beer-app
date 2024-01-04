import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Stack, Typography } from '@mui/material';
import BeerTypeIcon from '../BeerTypeIcon';
import FavouriteIcon from '../FavouriteIcon';
import { Beer } from '../../types';
import styles from './BeerCard.module.css';
interface FavouriteIconProps {
    beer: Beer;
    favouriteClickHandlerFunction?: Dispatch<SetStateAction<Beer[]>>
  }


const BeerCard = ({ beer, favouriteClickHandlerFunction }: FavouriteIconProps) => {

    const navigate = useNavigate();
    const placeholedrImageUrl = '/beer.jpg'

    const onBeerClick = (id: string) => navigate(`/beer/${id}`);


  return (
    <Paper elevation={3} className={styles.paperContainer} onClick={(e) => onBeerClick(beer.id)}>
        <Box className={styles.imageContainer}>
            <FavouriteIcon beer={beer} classes={{ root: styles.favouriteIcon }} clickHandlerFunction={favouriteClickHandlerFunction} />

            <img
            alt="Brewary logo"
            className={styles.image}
            src={placeholedrImageUrl}
        />
        </Box>
        <Box className={styles.infoContainer}>
            <Typography variant="h5" gutterBottom>
                {beer.name}
            </Typography>
            <Stack direction="row" className={styles.subtitle}>
                <BeerTypeIcon brewery_type={beer.brewery_type} className={styles.breweryTypeIcon}/>
                <Typography variant="subtitle1" className={styles.beerType}>{beer.brewery_type}</Typography>
            </Stack>
        </Box>
    </Paper>
  );
};

export default BeerCard;
