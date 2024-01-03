import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Beer, Metadata, SORT } from '../../types';
import { fetchData, fetchMetadata, createApiParams } from './utils';
import { Avatar, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import BeerTypeIcon from '../../components/BeerTypeIcon';
import BeerTypeFilter from '../../components/BeerTypeFilter';
import { TYPE } from '../../types';
import SortToggle from '../../components/SortToggle';
import BeerNameSearch from '../../components/BeerNameSearch';
import styles from './BeerList.module.css';
import FavouriteIcon from '../../components/FavouriteIcon/Index';
import { capitalise } from '../../utils';



const BeerList = () => {
  const navigate = useNavigate();
  const [beerList, setBeerList] = useState<Array<Beer>>([]);
  const [metadata, setMetadata] = useState<Metadata>({total:0});
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<TYPE | null>(null)
  const [sortDirection, setSortDirection] = useState<SORT>('asc');
  const [loading, setLoading] = useState(false);

  const page = useRef(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

 

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  // eslint-disable-next-line
  useEffect(() => {
    const fetchFilteredAndSortedData = fetchData.bind(this, setBeerList, setLoading);
    page.current = 1;
    fetchFilteredAndSortedData(createApiParams(typeFilter, searchTerm, sortDirection, page.current));
  }, [searchTerm, sortDirection, typeFilter]);

  // eslint-disable-next-line
  useEffect(fetchMetadata.bind(this, setMetadata), []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        containerRef.current.getBoundingClientRect().bottom <= window.innerHeight &&
        !loading &&
        (metadata.total - page.current * 50) > 0 //Hacky solution since the API is not properly paged (will not work if filter or rearch is active)
      ) {
        page.current += 1;
        fetchData(updateBeerList,setLoading,createApiParams(typeFilter, searchTerm, sortDirection, page.current))
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, metadata.total, searchTerm, sortDirection, typeFilter]);

  
  const updateBeerList = (data: Array<Beer>) => {
    setBeerList((prevData) => [...prevData, ...data]);

  }

  const onBeerClick = (id: string) => navigate(`/beer/${id}`);
  

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <main>
        <div ref={containerRef}>              
          <div className={`${styles.flexColumn} ${styles.fullWidth}`}>
            <div className={`${styles.flexRow} ${styles.fullWidth}`}>
              <BeerNameSearch onSearch={setSearchTerm}/>
              <SortToggle onSortChange={setSortDirection}/>
            </div>
            <BeerTypeFilter onFilterChange={setTypeFilter}/>
          </div>
          <List>
            {beerList.map((beer) => (
              <ListItemButton key={beer.id} onClick={onBeerClick.bind(this, beer.id)}>
                <ListItemAvatar>
                  <Avatar>
                    <BeerTypeIcon brewery_type={beer.brewery_type}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={beer.name} secondary={capitalise(beer.brewery_type)} />
                <FavouriteIcon beer={beer}/>
              </ListItemButton>
            ))}
          </List>
          </div>
          {loading && <div>Loading...</div>}

        </main>
      </section>
    </article>
  );
};

export default BeerList;
