import { Map } from './UI/Map';

class LoadedPlace {
    constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitle = document.querySelector('header h1');
        headerTitle.textContent = address;
    }
}

const link = new URL(location.href);
const queryParams = link.searchParams;
const coords = {
    lat: parseFloat(queryParams.get('lat')),
    lng: +queryParams.get('lng')
};
const address = queryParams.get('address');
new LoadedPlace(coords, address);