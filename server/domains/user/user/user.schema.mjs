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
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])',
      minLength: 8,
      maxLength: 32,
    },
    role: {
      type: 'string',
      enum: ['USER', 'ADMIN'],
    },
  },
};

const userParamsSchema = {
  type: 'object',
  required: ['link'],
  properties: {
    link: {
      type: 'string',
      format: 'uuid',
    },
  },
};

const userResponseSchema = {
  201: {
    type: 'object',
    required: ['id', 'email', 'isActivated', 'refreshToken', 'accessToken'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
      },
      email: {
        type: 'string',
        format: 'email',
      },
      isActivated: {
        type: 'boolean',
      },
      refreshToken: {
        type: 'string',
      },
      accessToken: {
        type: 'string',
      },
    },
  },
};

const userSchema = {
  body: userBodySchema,
  params: userParamsSchema,
  response: userResponseSchema,
};

export { userSchema };
