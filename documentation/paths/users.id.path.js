export const usersId = {
    'get': {
      'summary': 'Get a user by ID',
      'tags': ['Users'],
      'parameters': [
        {
          'in': 'path',
          'name': 'id',
          'required': true,
          'schema': {
            'type': 'integer'
          }
        }
      ],
      'responses': {
        '200': {
          'description': 'Successful response',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/User'
              }
            }
          }
        },
        '404': {
          'description': 'User not found'
        },
      },
      'security': [
        {
          'BearerAuth': []
        }
      ],
    },
    'put': {
      'summary': 'Update a user',
      'tags': ['Users'],
      'parameters': [
        {
          'in': 'path',
          'name': 'id',
          'required': true,
          'schema': {
            'type': 'integer'
          }
        }
      ],
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
        '200': {
          'description': 'User updated',
          'content': {
            'application/json': {
              'schema': {
                '$ref': '#/components/schemas/User'
              }
            }
          }
        },
        '404': {
          'description': 'User not found'
        },
      },
      'security': [
        {
          'BearerAuth': []
        }
      ],
    },
    'delete': {
      'summary': 'Delete a user',
      'tags': ['Users'],
      'parameters': [
        {
          'in': 'path',
          'name': 'id',
          'required': true,
          'schema': {
            'type': 'integer'
          }
        }
      ],
      'responses': {
        '204': {
          'description': 'User deleted'
        },
        '404': {
          'description': 'User not found'
        }
      },
      'security': [
        {
          'BearerAuth': []
        }
      ],
    }
  }