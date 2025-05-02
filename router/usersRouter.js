import { Router } from "express";
import { allUser, userByEmail, userById, userByCountry } from '../controllers/users/read.js';
import { Register, createMany } from '../controllers/users/create.js';
import update from '../controllers/users/update.js';
import remove from '../controllers/users/delete.js';
import schemaUser from '../schema/users/create.js';
import validator from '../middleware/validator.js';
import accountExist from "../middleware/accountExist.js";
import createHash from "../middleware/createHash.js";



const routerUser = Router();

routerUser.get('/allUsers', allUser);
routerUser.get('/userByEmail/:emailParams', userByEmail);
routerUser.get('/userById/:idParams', userById);
routerUser.get('/userByCountry/:country', userByCountry);
routerUser.post('/createMany', createMany);
routerUser.post('/createOne', validator(schemaUser), accountExist, createHash, Register);
routerUser.put('/update',validator(schemaUser),accountExist, update);
routerUser.delete('/delete/:id', remove);

export default routerUser;