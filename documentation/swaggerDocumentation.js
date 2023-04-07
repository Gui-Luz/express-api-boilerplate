export const swaggerDocument =
{
    "openapi": "3.0.1",
    "info": {
      "title": "Express API Boilerplate",
      "version": "1.0.0",
      "description": "An express api boilerplate for the lazy."
    },
    "servers": [
      {
        "url": "http://localhost:3000",
        "description": "Development server"
      }
    ],
    "paths": {
      "/users": {
        "get": {
          "summary": "Get all users",
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a new user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User created",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "/users/{id}": {
        "get": {
          "summary": "Get a user by ID",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            }
          }
        },
        "put": {
          "summary": "Update a user",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "User updated",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            }
          }
        },
        "delete": {
          "summary": "Delete a user",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "204": {
              "description": "User deleted"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
      }
    },
    "components": {
        "schemas": {
            "User": {
                "type": "object",
                "properties": {
                    "firstName": {
                        "type": "string",
                        "example": "Jim"
                    },
                    "lastName": {
                        "type": "string",
                        "example": "Carrey"
                    },
                    "username": {
                        "type": "string",
                        "example": "carreyjim.1985"
                    },
                    "email": {
                        "type": "string",
                        "example": "carreyjim1978@comedian.com"
                    },
                }
            }
        }
    }
}