import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress, getAddressFromCoords } from './utility/Location';

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
        this.shareBtn = document.getElementById('share-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
        this.shareBtn.addEventListener('click', this.sharePlaceHandler);
        addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    }

    sharePlaceHandler(){
        const sharedLinkInputElement = document.getElementById('share-link');
        if (!navigator.clipboard) { 
            sharedLinkInputElement.select();
            return; 
        }
        navigator.clipboard.writeText(sharedLinkInputElement.value)
        .then(() => {
            alert('Copied into clipboard');
        })
        .catch(err => {
            console.log(err);
            sharedLinkInputElement.select();
        });
    }

    selectPlace(coordinates, address){
        if(this.map) {
            this.map.render(coordinates);
        } else {
            this.map = new Map(coordinates);
        }
        this.shareBtn.disabled = false;
        const shareLinkInputElement = document.getElementById('share-link');
        shareLinkInputElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
    }

     locateUserHandler() {
        if(!navigator.geolocation) {
            alert('Location feature not available in you browser - please use a more modern browser');
            return;
        }
        const modal = new Modal ('loading-modal-content', 'Loading location - please wait');
        modal.show();
        navigator.geolocation.getCurrentPosition(
            async successResult => {
                const coordinates = {
                    lat: successResult.coords.latitude,
                    lng: successResult.coords.longitude,
                };
                const address = await getAddressFromCoords(coordinates);
                modal.hide();
                this.selectPlace(coordinates, address);
        }, 
        error => {
            modal.hide();
            alert('Could not locate you. Please enter an address manually');
        });
    }
    
    async findAddressHandler(event) {
        event.preventDefault();
        const address = event.target.querySelector('input').value;
        console.log(address);
        if(!address || address.trim().length === 0){
            alert('Invalid address entered - please try again');
            return;
        }
        const modal = new Modal (
            'loading-modal-content',
            'loading location - please wait!'
        );
        modal.show();
        try{
            const coordinates = await getCoordsFromAddress(address);
            console.log(coordinates);
            this.selectPlace(coordinates, address);
        } catch(err) {
            alert('this is my custom error message');
        }
        modal.hide();
    }
}
new PlaceFinder(); 

