import { Router } from "express";
import { allCities, cityByName, cityById } from '../controllers/cities/read.js';

const routerCity = Router();

routerCity.get('/allCities', allCities); 
routerCity.get('/cityByName/:nameParams', cityByName);
routerCity.get('/cityById/:idParams', cityById);

export default routerCity;