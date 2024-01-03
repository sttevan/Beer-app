import React, { useEffect, useState } from 'react';
import { SvgIconTypeMap, Tooltip } from '@mui/material';
import * as LocalStorage from '../../api/localStorage';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Beer } from '../../types';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';

interface FavouriteIconProps {
  beer: Beer;
}

const FavouriteIcon = ({ beer, ...svgProps }: FavouriteIconProps &  DefaultComponentProps<SvgIconTypeMap<{}, "svg">>) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);


    useEffect(() => {
        setIsFavourite(LocalStorage.isFavourite(beer.id))
    }, [beer]);
   
   
    const handleRemoveClick = (event: React.MouseEvent<SVGSVGElement>, beer: Beer) => {
        event.stopPropagation();
        LocalStorage.removeFavourite(beer.id);
        setIsFavourite(!isFavourite)
    }

    const handleAddClick = (event: React.MouseEvent<SVGSVGElement>, beer: Beer) => {
        event.stopPropagation();
        LocalStorage.addFavourite(beer);
        setIsFavourite(!isFavourite)

    }

  return (
    <Tooltip title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}>
        {isFavourite
            ? <StarRateRoundedIcon onClick={(event) => handleRemoveClick(event, beer)} { ...svgProps }/>
            : <StarBorderRoundedIcon onClick={(event) => handleAddClick(event, beer)} {...svgProps}/>}
    </Tooltip>

  );
};

export default FavouriteIcon;
