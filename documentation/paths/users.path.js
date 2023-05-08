export const users = {
    'get': {
      'summary': 'Get all users',
      'tags': ['Users'],
      'responses': {
        '200': {
          'description': 'Successful response',
          'content': {
            'application/json': {
              'schema': {
                'type': 'array',
                'items': {
                  '$ref': '#/components/schemas/User'
                }
              }
            }
          }
        }
      },
      'security': [
        {
          'BearerAuth': []
        }
      ],
    },
    'post': {
      'summary': 'Create a new user',
      'tags': ['Users'],
      'requestBody': {
        'required': true,
        'content': {
          'application/json': {
            'schema': {
              '$ref': '#/components/schemas/User'
            }
          }
        }
      },
      'responses': {
        '201': {
          'description': 'User created',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/User'
              }
            }
          }
        }
      },
    }
  }