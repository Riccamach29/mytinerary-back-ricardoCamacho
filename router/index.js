import { Router } from "express";
import routerCity from './citiesRouter.js';

const routerIndex = Router();

routerIndex.use('/cities', routerCity);

export default routerIndex;