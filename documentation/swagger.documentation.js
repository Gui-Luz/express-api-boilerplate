import { auth } from './paths/auth.path.js';
import { basicAuth } from './securitySchemes/basicAuth.securitySchemes.js';
import { bearerAuth } from './securitySchemes/bearerAuth.securitySchemes.js';
import { users } from './paths/users.path.js';
import { usersId } from './paths/users.id.path.js';
import { User } from './schemas/user.schemas.js';

export const swaggerDocument = {
  openapi: '3.0.2',
  info: {
    title: 'Express Api Boilerplate',
    version: '1.0.0',
    description: '',
    contact: {
      url: '',
    },
    tags: [
      {
        name: 'Users',
        description: 'Endpoints related to users',
      },
      {
        name: 'Auth',
        description: 'Basic authorization endpoint',
      },
    ],
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    '/auth': auth,
    '/users': users,
    '/users/{id}': usersId,
  },
  components: {
    schemas: {
      User,
    },
    securitySchemes: {
      BasicAuth: basicAuth,
      BearerAuth: bearerAuth,
    },
  },
};
