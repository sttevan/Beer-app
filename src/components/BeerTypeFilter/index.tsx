import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import SportsBar from '@mui/icons-material/SportsBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import RoomIcon from '@mui/icons-material/Room';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BusinessIcon from '@mui/icons-material/Business';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';

type BreweryType =
  | 'micro'
  | 'nano'
  | 'regional'
  | 'brewpub'
  | 'large'
  | 'planning'
  | 'bar'
  | 'contract'
  | 'proprietor'
  | 'closed'
  | null;

interface BeerTypeFilterProps {
  onFilterChange: (selectedType: BreweryType) => void;
}

const BeerTypeFilter: React.FC<BeerTypeFilterProps> = ({ onFilterChange }) => {
  const [selectedType, setSelectedType] = useState<BreweryType>(null);

  const handleTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: BreweryType
  ) => {
    if (newType !== null) {
      setSelectedType(newType);
      onFilterChange(newType); 
    }
  };

  return (
    <div>
        <ToggleButtonGroup
            value={selectedType}
            exclusive
            onChange={handleTypeChange}
            aria-label="icon group"
            >
        
            <ToggleButton value="micro" aria-label="micro">
                <Tooltip title="Micro">
                    <SportsBar />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="nano" aria-label="nano">
                <Tooltip title="Nano">
                    <WineBarIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="regional" aria-label="regional">
                <Tooltip title="Regional">
                    <RoomIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="brewpub" aria-label="brewpub">
                <Tooltip title="Brewpub">
                    <LocalBarIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="large" aria-label="large">
                <Tooltip title="Large">
                    <ApartmentIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="planning" aria-label="planning">
                <Tooltip title="Planning">
                    <EventAvailableIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="bar" aria-label="bar">
                <Tooltip title="Bar">
                    <LocalBarIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="contract" aria-label="contract">
                <Tooltip title="Contract">
                    <HowToVoteIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="proprietor" aria-label="proprietor">
                <Tooltip title="Proprietor">
                    <BusinessIcon />
                </Tooltip>
            </ToggleButton>

            <ToggleButton value="closed" aria-label="closed">
                <Tooltip title="Closed">
                    <ClosedCaptionIcon />
                </Tooltip>
            </ToggleButton>

        </ToggleButtonGroup>
    </div>
  );
};

export default BeerTypeFilter;
