import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'Users API',
    version: "1.0.0",
    description: 'Users API'
  },
  host: 'localhost:3000',
  basePath: "/api/products"
};
const outputFile = './swagger-output.json';
const routes = ['./routes/products.js'];
swaggerAutogen()(outputFile, routes, doc);