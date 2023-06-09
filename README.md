## EXPRESS API BOILERPLATE

### This [express](https://expressjs.com/) API uses:
###  - [winston](https://www.npmjs.com/package/winston) for logging 
###  - [joi](https://joi.dev/api/?v=17.8.3) for defining schemas
###  - [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) for documentation
###  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) and [express-basic-auth](https://www.npmjs.com/package/express-basic-auth) for authentication

Usage:
```
git clone https://github.com/Gui-Luz/express-api-boilerplate.git
```

```
docker build . -t express-api-boilerplate:latest
docker run -p 3000:3000 express-api-boilerplate
```