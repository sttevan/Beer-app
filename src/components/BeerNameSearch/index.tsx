import React, { useCallback, useState } from 'react';
import { TextField } from '@mui/material';
import debounce from "lodash.debounce";
import styles from './BeerNameSearch.module.css';


interface BeerNameSearchProps {
  onSearch: (query: string) => void;
}

const BeerNameSearch: React.FC<BeerNameSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);

    debouncedOnChange(newQuery)
    
  };

    const debouncedOnChange = useCallback(debounce(onSearch, 500), []);

  return (
    <div className={styles.searchContainer}>
      <TextField
        fullWidth
        label="Search"
        size="small"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default BeerNameSearch;
