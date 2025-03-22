import { Router } from "express";
import { allCities, cityByName, cityById } from '../controllers/cities/read.js';
import {createOne, createMany} from '../controllers/cities/create.js';

const routerCity = Router();

routerCity.get('/allCities', allCities); 
routerCity.get('/cityByName/:nameParams', cityByName);
routerCity.get('/cityById/:idParams', cityById);
routerCity.post('/createOne', createOne);
routerCity.post('/createMany', createMany);

export default routerCity;