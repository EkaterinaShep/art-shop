import * as artItemController from './art-item.controller.mjs';
import { artItemSchema } from './art-item.schema.mjs';
import { customEventEmitter } from '../../constants/constants.mjs';

const artItemRouter = (server, opts, done) => {
  server.addHook('onRequest', (request, reply, done) => {
    customEventEmitter.once('changeFileName', (fileName) => {
      request.filename = fileName;
    });

    done();
  });

  server.get(
    '/art-item',
    {
      schema: {
        response: artItemSchema.response,
        querystring: artItemSchema.querystring,
      },
    },
    artItemController.getAll
  );

  server.post(
    '/art-item',

    {
      schema: { body: artItemSchema.body, response: artItemSchema.response },
    },
    artItemController.addArtItem
  );

  done();
};

export { artItemRouter };
