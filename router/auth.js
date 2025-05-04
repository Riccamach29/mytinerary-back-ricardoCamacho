import {Router} from 'express';
import  signIn  from '../controllers/auth/signIn.js';
import schemaSignIn from '../schema/auth/signIn.js';
import validator from '../middleware/validator.js';
import accountNotExist from '../middleware/accountNotExist.js';
import validatedPassword from '../middleware/validatedPassword.js';


const routerAuth = Router();

routerAuth.post('/signIn', validator(schemaSignIn),accountNotExist, validatedPassword, signIn);

export default routerAuth;
