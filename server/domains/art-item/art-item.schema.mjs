const artItemBodySchema = {
  type: 'object',
  required: ['name'],
  properties: {
    name: {
      properties: {
        value: {
          type: 'string',
          minLength: 1,
        },
      },
    },
    img: {
      type: 'object',
      properties: {
        encoding: { type: 'string' },
        filename: { type: 'string' },
        limit: { type: 'boolean' },
        mimetype: { type: 'string', enum: ['image/png', 'image/jpeg'] },
      },
    },
    description: {
      properties: {
        value: {
          type: 'string',
        },
      },
    },
    price: {
      properties: {
        value: {
          type: 'number',
          minimum: 0,
        },
      },
    },
  },
};

const artItemParamsSchema = {
  type: 'object',
  required: ['artItemId'],
  properties: {
    artItemId: {
      type: 'string',
      format: 'uuid',
    },
  },
};

const artItemQuerySchema = {
  type: 'object',
  properties: {
    limit: {
      type: 'integer',
      minimum: 1,
      default: 10,
    },
    page: {
      type: 'integer',
      minimum: 1,
      default: 10,
    },
  },
};

const artItemResponseSchema = {
  '2xx': {
    type: 'array',
    properties: {
      items: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: {
            type: 'string',
            format: 'uuid',
          },
          name: {
            type: 'string',
          },
          img: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
        },
      },
    },
  },
};

const artItemSchema = {
  body: artItemBodySchema,
  params: artItemParamsSchema,
  querystring: artItemQuerySchema,
  response: artItemResponseSchema,
};

export { artItemSchema };
