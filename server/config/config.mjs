import process from 'process';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

export { PORT, HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST };
