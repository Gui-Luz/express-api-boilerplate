export const auth = {
    'post': {
      'summary': 'Authenticate a user using Basic Authentication',
      'tags': ['Auth'],
      'description': 'This endpoint authenticates a user using Basic Authentication. The user must provide a valid username and password in the Authorization header.',
      'consumes': [
        'application/json'
      ],
      'produces': [
        'application/json'
      ],
      'responses': {
        '200': {
          'description': 'Authentication successful. Returns a token for subsequent API requests.',
          'schema': {
            'type': 'object',
            'properties': {
              'token': {
                'type': 'string'
              }
            }
          }
        },
        '401': {
          'description': 'Authentication failed. Invalid credentials.',
          'schema': {
            'type': 'object',
            'properties': {
              'message': {
                'type': 'string'
              }
            }
          }
        }
      },
      'security': [
        {
          'BasicAuth': []
        }
      ],
    }
  }