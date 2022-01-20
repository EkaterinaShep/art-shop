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

const JWT_ACCESS_KEY = process.env.JWT_ACCESS_KEY;
const JWT_REFRESH_KEY = process.env.JWT_REFRESH_KEY;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

const API_URL = process.env.API_URL;
const CLIENT_URL = process.env.CLIENT_URL;

export {
  PORT,
  HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST,
  JWT_ACCESS_KEY,
  JWT_REFRESH_KEY,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  API_URL,
  CLIENT_URL,
};
