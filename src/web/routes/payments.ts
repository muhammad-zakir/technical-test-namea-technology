import { makePaymentsUseCases } from '@application/payments';

export default async function postRoutes(fastify: FastifyRouteInstance) {
  const payments = makePaymentsUseCases();

  fastify.route({
    method: 'POST',
    url: '/api/check-card',
    schema: {
      body: {
        type: 'object',
        properties: {
          cardNumber: { type: 'string' },
        },
        required: ['cardNumber'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            cardNetwork: { type: 'string' },
            isValid: { type: 'boolean' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['payments'],
    },
    async handler(request, response) {
      const validateCardNumber = await payments.commands.validateCardNumber({
        cardNumber: request.body.cardNumber
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      response.status(200).send(validateCardNumber);
    },
  });
}
