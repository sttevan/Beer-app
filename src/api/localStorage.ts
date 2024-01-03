import { Beer } from '../types';

const LIST_NAME = 'favouriteBeers';

const getFavourites = () => {
    return  JSON.parse(localStorage.getItem(LIST_NAME) || '[]');
}

const isFavourite = (id: string): boolean => {
    const favourites: Array<Beer> = getFavourites();
    return favourites.some((beer: Beer)=> { return beer.id === id })
}

const addFavourite = (beer: Beer) => {
    if(!isFavourite(beer.id)){
        const favourites = getFavourites();
        favourites.push(beer);
        localStorage.setItem(LIST_NAME, JSON.stringify(favourites));
    }   
}

const removeFavourite = (id: string) => {
    if(isFavourite(id)){
        const favourites = getFavourites();
        const filteredFavourites = favourites.filter(function(beer: Beer ) {
            return beer.id !== id;
        });
        localStorage.setItem(LIST_NAME, JSON.stringify(filteredFavourites));
    }   
}

const clearFavourites = () => {
    localStorage.setItem(LIST_NAME, JSON.stringify([]));
}

export { getFavourites, isFavourite, addFavourite, removeFavourite, clearFavourites };
