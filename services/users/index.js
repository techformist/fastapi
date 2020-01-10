"use strict";

module.exports = async function(fastify, opts) {
  fastify.get("/users/:id", async function(request, reply) {
    return { id: request.params.id };
  });
  fastify.get("/users", async function(request, reply) {
    return "this is user";
  });
};
