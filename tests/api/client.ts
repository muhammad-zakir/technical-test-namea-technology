import app from '@web/app';
import Fastify from 'fastify';
import supertest from 'supertest';

export async function makeClient() {
  const fastify = Fastify();

  await app(fastify);

  await fastify.ready();

  return {
    client: supertest(fastify.server)
  };
}
