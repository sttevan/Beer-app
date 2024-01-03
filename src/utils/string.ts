const getStringForApi = (data: string) => data.toLowerCase().replaceAll(' ', '_');

const capitalise = (word: string) =>{
    return word[0].toUpperCase() + word.slice(1);
}

const buildMapsUrl = (lat: string, lng: string ) => {
    return `http://maps.google.com/?ie=UTF8&hq=${lat},${lng}+(label)&ll=${lat},${lng}&z=13`
}

export { getStringForApi,  capitalise, buildMapsUrl};
