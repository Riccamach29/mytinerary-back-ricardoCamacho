import express from 'express';
import 'dotenv/config.js';
import './config/database.js';
import routerIndex from './router/index.js';
import cors from 'cors';
import morgan from 'morgan';

// Importar middlewares de error
import error_400 from './middleware/error_400.js';
import error_404 from './middleware/error_404.js';
import error_500 from './middleware/error_500.js';

const server = express();

const PORT = process.env.PORT || 8080;

const ready = () => console.log("Server is ready on port:", PORT);

// Configuraciones básicas
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

// Configurar Enrutador
server.use('/api', routerIndex);

// Usar middlewares de errores (se deben poner al final de las rutas)
server.use(error_400); // Error 400 para validaciones y solicitudes incorrectas
server.use(error_404); // Error 404 si no se encuentra la ruta o recurso
server.use(error_500); // Error 500 para errores del servidor

server.listen(PORT, ready);
