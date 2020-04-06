import {API} from './Config';

export const getData = (d) => {
   
    fetch(API)
    .then(response => d.setCards({ cards: response.data}))

}

