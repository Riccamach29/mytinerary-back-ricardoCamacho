import {Router} from 'express';
import  signIn  from '../controllers/auth/signIn.js';
import schemaSignIn from '../schema/auth/signIn.js';
import validator from '../middleware/validator.js';
import accountNotExist from '../middleware/accountNotExist.js';
import validatedPassword from '../middleware/validatedPassword.js';
import generateToken from '../middleware/generateToken.js';


const routerAuth = Router();

routerAuth.post('/signIn', validator(schemaSignIn),accountNotExist, validatedPassword, generateToken, signIn);

export default routerAuth;
