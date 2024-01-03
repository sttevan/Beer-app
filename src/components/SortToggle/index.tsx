import React, { useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

type SortDirection = 'asc' | 'desc';

interface SortingProps {
  onSortChange: (direction: SortDirection) => void;
}

const SortingComponent: React.FC<SortingProps> = ({ onSortChange }) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSortChange = () => {
    const newSortDirection: SortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newSortDirection);
    onSortChange(newSortDirection);
  };

  return (
    <div>
      <Tooltip title={sortDirection === 'asc' ? 'A->Z' : 'Z->A'} >
        <Button onClick={handleSortChange}>
            {sortDirection === 'asc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
        </Button>
      </Tooltip>
    </div>
  );
};

export default SortingComponent;
