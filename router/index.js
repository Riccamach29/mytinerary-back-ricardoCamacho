import { Router } from "express";
import routerCity from './citiesRouter.js';
import routerItinerary from './itinerariesRouter.js';

const routerIndex = Router();

routerIndex.use('/cities', routerCity);
routerIndex.use('/itineraries', routerItinerary);

export default routerIndex;