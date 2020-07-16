const GOOGLE_API_KEY = 'AIzaSyBuoyX9EW099iU7kCUN3jms7tLdyXOsJ10';

export async function getAddressFromCoords(coords) {
   const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);
   if(!response.ok) {
    throw new Error('Failed to fecth address. Please try again');
   }
   const data = await response.json();
    console.log(data);
    if(data.error_message) {
        throw new Error(data.error_message);
    }
    const address = data.results[0].formatted_address;
    return address;
}

export async function getCoordsFromAddress(address) {
    const urlAddress = encodeURI(address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);
    if(!response.ok) {
        throw new Error('Failed to fecth coordinates. Please try again');
    }
    console.log(response);
    const data = await response.json();
    console.log(data);
    if(data.error_message) {
        throw new Error(data.error_message);
    }
    const coordinates = data.results[0].geometry.location;
    console.log(coordinates);
    return coordinates;
}