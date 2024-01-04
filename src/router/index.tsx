import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import Offline from '../views/Offline';
import Home from '../views/Home';
import NotFound from '../views/404';
import BeerList from '../views/BeerList';
import Beer from '../views/Beer';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

const Router = () => {
  const theme = useTheme()

  return(
    <BrowserRouter>
      <Menu>
        <Box sx={{p: 3, height: 'calc(100% - 64px)', display: 'flex', flexDirection: 'column', background: theme.palette.background.default}}>
          <Box sx={{flex: '1'}}>
            <Offline />
            <Routes>
              <Route index element={<Home />} />
              <Route path='beer'>
                <Route index element={<BeerList />} />
                <Route path=':id' element={<Beer />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Menu>
    </BrowserRouter>
  );

}

export default Router;
