import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { SvgIconTypeMap, Tooltip } from '@mui/material';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import * as LocalStorage from '../../api/localStorage';
import { Beer } from '../../types';

interface FavouriteIconProps {
  beer: Beer;
  clickHandlerFunction?: Dispatch<SetStateAction<Beer[]>>
}

const FavouriteIcon = ({ beer, clickHandlerFunction, ...svgProps }: FavouriteIconProps &  DefaultComponentProps<SvgIconTypeMap<{}, "svg">>) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);


    useEffect(() => {
        setIsFavourite(LocalStorage.isFavourite(beer.id))
    }, [beer]);
   
   
    const handleRemoveClick = (event: React.MouseEvent<SVGSVGElement>, beer: Beer) => {
        event.stopPropagation();
        LocalStorage.removeFavourite(beer.id);
        setIsFavourite(!isFavourite)
        clickHandlerFunction && clickHandlerFunction(LocalStorage.getFavourites)
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
