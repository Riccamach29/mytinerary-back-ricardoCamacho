import { Router } from "express";
import { allItineraries, itineraryByName, itineraryById, itinerariesByCity } from '../controllers/itineraries/read.js';
import { createOne, createMany } from '../controllers/itineraries/create.js';
import update from '../controllers/itineraries/update.js';
import remove from '../controllers/itineraries/delete.js';

const routerItinerary = Router();

routerItinerary.get('/allItineraries', allItineraries);
routerItinerary.get('/itineraryByName/:nameParams', itineraryByName);
routerItinerary.get('/itineraryById/:idParams', itineraryById);
routerItinerary.get('/itinerariesByCity/:cityId', itinerariesByCity);
routerItinerary.post('/createOne', createOne);
routerItinerary.post('/createMany', createMany);
routerItinerary.put('/update', update);
routerItinerary.delete('/delete/:id', remove);



export default routerItinerary;