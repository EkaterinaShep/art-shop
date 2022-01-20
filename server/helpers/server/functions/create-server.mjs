import Fastify from 'fastify';

function createServer() {
  return Fastify({ logger: true });
}

export { createServer };
