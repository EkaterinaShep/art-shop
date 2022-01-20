import multipart from 'fastify-multipart';
import fastifyStatic from 'fastify-static';
import fastifyCookie from 'fastify-cookie';
import fastifyCors from 'fastify-cors';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import {
  createServer,
  listenServer,
  registerRouters,
} from './helpers/server/index.mjs';
import { PORT, HOST, CLIENT_URL  } from './config/config.mjs';
import { db, connectDb, synchronizeAllModels } from './db/index.mjs';
import {
  ArtItem,
  Basket,
  BasketArtItem,
  User,
  Token,
  routers,
} from './domains/index.mjs';
import { uploadFile } from './helpers/file-system/upload-file.mjs';
import { setErrorHandler } from './helpers/server/functions/set-error-handler.mjs';
import { errorHandler } from './helpers/custom-errors/error-handler.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* ----------------------------- Server creation ---------------------------- */
const server = createServer();

/* ------------------------------ Registrations of plugins ----------------------------- */
server.register(multipart, {
  attachFieldsToBody: true,
  onFile: uploadFile,
});
server.register(fastifyStatic, {
  root: resolve(__dirname, 'static'),
  decorateReply: false,
});
server.register(fastifyCookie);
server.register(fastifyCors, { credentials: true, origin: CLIENT_URL });
registerRouters(server, routers);

/* -------------------------- Error handler setting ------------------------- */
setErrorHandler(server, errorHandler);

/* ----------------------------- Working with db ----------------------------- */
await connectDb(db);
await synchronizeAllModels(db);

/* ------------------------- Server listening start ------------------------- */
listenServer({ server, PORT, HOST });
