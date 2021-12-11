const userBodySchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
    },
    role: {
      type: "string",
      enum: ["User", "Admin"]
    }
  },
};

const userParamsSchema = {
  type: 'object',
  required: ['userId'],
  properties: {
    userId: {
      type: 'string',
      format: 'uuid',
    },
  },
};

const userResponseSchema = {
  '2xx': {
    type: 'object',
    required: ['id', 'title', 'columns'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      title: { type: 'string' },
      columns: {
        type: 'array',
        items: columnSchema,
      },
    },
  },
};

const userSchema = {
  schema: {
    body: userBodySchema,
     params: userParamsSchema,
    // response: userResponseSchema,
  },
};

export { userSchema };
