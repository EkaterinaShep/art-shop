import multipart from 'fastify-multipart';
import fastifyStatic from 'fastify-static';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import {
  createServer,
  listenServer,
  registerRouters,
} from './helpers/server/index.mjs';
import { PORT, HOST } from './config/config.mjs';
import { db } from './db/db.mjs';
import { connectDb } from './db/connect-db.mjs';
import { synchronizeAllModels } from './db/synchronize-all-models.mjs';
import { ArtItem, Basket, BasketArtItem, User } from './db/models/index.mjs';
import { routers } from './domains/index.mjs';
import { uploadFile } from './helpers/file-system/upload-file.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
registerRouters(server, routers);

/* ----------------------------- Working with db ----------------------------- */
await connectDb(db);
await synchronizeAllModels(db);

/* ------------------------- Server listening start ------------------------- */
listenServer({ server, PORT, HOST });
