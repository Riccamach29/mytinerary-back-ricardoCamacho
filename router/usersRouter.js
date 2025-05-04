import { Router } from "express";
import { allUser, userByEmail, userById, userByCountry } from '../controllers/users/read.js';
import  Register from '../controllers/users/create.js';
import update from '../controllers/users/update.js';
import remove from '../controllers/users/delete.js';
import { schemaOneUser } from '../schema/users/create.js';
import updateUserBodySchema from '../schema/users/update.js';
import validator from '../middleware/validator.js';
import accountExist from "../middleware/accountExist.js";
import createHash from "../middleware/createHash.js";
import passport from "../middleware/passport.js";


const routerUser = Router();

routerUser.get('/allUsers',passport.authenticate('jwt', {session: false}), allUser);
routerUser.get('/userByEmail/:emailParams', userByEmail);
routerUser.get('/userById/:idParams', userById);
routerUser.get('/userByCountry/:country', userByCountry);
routerUser.post('/createOne', validator(schemaOneUser), accountExist, createHash, Register);
routerUser.put('/update/:id', validator(updateUserBodySchema),accountExist, update);
routerUser.delete('/delete/:id', remove);

export default routerUser;