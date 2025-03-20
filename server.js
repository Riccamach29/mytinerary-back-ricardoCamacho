import express from 'express';
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors';
import morgan from 'morgan';


const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("server is ready on port :" + PORT);

//configuraciones basicas
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));


server.listen(PORT, ready);