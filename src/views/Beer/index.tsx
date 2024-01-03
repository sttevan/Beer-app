import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { Beer as IBeer } from '../../types';
import { fetchData } from './utils';
import { buildMapsUrl, capitalise } from '../../utils';
import BeerTypeIcon from '../../components/BeerTypeIcon';
import FavouriteIcon from '../../components/FavouriteIcon/Index';
import styles from './Beer.module.css';


const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer>();
  const placeholedrImageUrl = '/beer.jpg';


  // eslint-disable-next-line
  useEffect(fetchData.bind(this, setBeer, id), []);

  return (
    <>
    {beer && (<Box  className={styles.pageContainer}>
      <Box className={styles.infoContainer}>
        <Stack  spacing={2} direction="column">

          <Stack spacing={2} direction="column">
            <Stack direction="row" className={styles.header}>

              <Typography variant="h2">{beer?.name}</Typography>
              <FavouriteIcon className={styles.favouriteIcon} beer={beer!} />
            </Stack>
            <Stack direction="row" className={styles.subtitle}>
                {beer?.brewery_type && ( <BeerTypeIcon brewery_type={beer?.brewery_type} className={styles.breweryTypeIcon}/>)}
                {beer?.brewery_type &&( <Typography variant="h4" className={styles.beerType}>{capitalise(beer?.brewery_type)}</Typography>)}
            </Stack>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Lorem ipsum dolor sit amet, consectetur apor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ue magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Lorem ipipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </Typography>
          </Stack>
        </Stack>
        <Stack  spacing={2} direction="column">
          <Stack  spacing={2} direction="row"  className={styles.contactInfo}>
            <Box>
              <Typography variant="h5">
                Address
              </Typography>
              <br/>
              {beer.street}, {beer.city}
              <br/>
              {beer.state}, {beer.country}, {beer.postal_code}
            </Box>
            <Box>
              <Typography variant="h5">
                Phone
              </Typography>
              <br/>
              {beer.phone}
            </Box>
          </Stack>
          <Stack spacing={2} direction="row" className={styles.social}>
            {beer.website_url && (<IconButton aria-label={beer.website_url} onClick={() => window.open(beer.website_url, "_blank")}>
              <PublicOutlinedIcon fontSize="large" />
            </IconButton>)}
            <IconButton aria-label={beer.website_url} onClick={() => window.open(buildMapsUrl(beer.latitude, beer.longitude), "_blank")}>
              <LocationOnOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="Facebook link" onClick={() => window.open('facebook.com', "_blank")}>
              <FacebookOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="Twitter link" onClick={() => window.open('twitter.com', "_blank")}>
              <FlutterDashOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="Instagram link" onClick={() => window.open('instagram.com', "_blank")}>
              <PhoneIphoneOutlinedIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      
      </Box>
      <Box className={styles.imageContainer}>
        <img
          alt="Brewary logo"
          className={styles.coverImage}
          src={placeholedrImageUrl}
        />
      </Box>
    </Box>)}
    </>

  );
};

export default Beer;
