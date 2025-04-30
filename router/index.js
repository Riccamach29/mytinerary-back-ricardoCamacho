import { Router } from "express";
import routerCity from './citiesRouter.js';
import routerItinerary from './itinerariesRouter.js';
import routerUser from './usersRouter.js';

const routerIndex = Router();

routerIndex.use('/cities', routerCity);
routerIndex.use('/itineraries', routerItinerary);
routerIndex.use('/users', routerUser);

export default routerIndex;