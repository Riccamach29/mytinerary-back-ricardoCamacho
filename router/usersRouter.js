import { Router } from "express";
import { allUser, userByEmail, userById, userByCountry } from '../controllers/users/read.js';
import { createOne, createMany } from '../controllers/users/create.js';
import update from '../controllers/users/update.js';
import remove from '../controllers/users/delete.js';

const routerUser = Router();

routerUser.get('/allUsers', allUser);
routerUser.get('/userByEmail/:emailParams', userByEmail);
routerUser.get('/userById/:idParams', userById);
routerUser.get('/userByCountry/:country', userByCountry);
routerUser.post('/createOne', createOne);
routerUser.post('/createMany', createMany);
routerUser.put('/update', update);
routerUser.delete('/delete/:id', remove);

export default routerUser;