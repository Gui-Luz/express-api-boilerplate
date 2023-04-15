export const swaggerDocument =
{
    "openapi": "3.0.2",
    "info": {
      "title": "Express API Boilerplate",
      "version": "1.0.0",
      "description": "An express api boilerplate for the lazy.",
      "contact": {
        "url": "https://github.com/Gui-Luz/express-api-boilerplate"
      }
    },
    "servers": [
      {
        "url": "http://localhost:3000",
        "description": "Development server"
      }
    ],
    "paths": {
      "/auth": {
        "post": {
          "summary": "Authenticate a user using Basic Authentication",
          "description": "This endpoint authenticates a user using Basic Authentication. The user must provide a valid username and password in the Authorization header.",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "Authentication successful. Returns a token for subsequent API requests.",
              "schema": {
                "type": "object",
                "properties": {
                  "token": {
                    "type": "string"
                  }
                }
              }
            },
            "401": {
              "description": "Authentication failed. Invalid credentials.",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "BasicAuth": []
            }
          ],
        }
      },
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
          },
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
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
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
            },
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
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
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
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
            },
        },
        "securitySchemes": {
          "BasicAuth": {
            "type": "http",
            "scheme": "basic",
            "in": "header",
            "description": "Basic authorization"
          },
          "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "description": "JWT Authorization header using the Bearer scheme. Example: 'Bearer {token}'"
          },
        }
    }
}