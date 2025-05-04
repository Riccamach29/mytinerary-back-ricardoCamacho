import { Router } from "express";
import routerCity from './citiesRouter.js';
import routerItinerary from './itinerariesRouter.js';
import routerUser from './usersRouter.js';
import routerAuth from './auth.js';

const routerIndex = Router();

routerIndex.use('/cities', routerCity);
routerIndex.use('/itineraries', routerItinerary);
routerIndex.use('/users', routerUser);
routerIndex.use('/auth', routerAuth);


export default routerIndex;