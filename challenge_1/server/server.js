const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  console.log(req);
  next();
});

// Access-Control-Expose-Headers: 'X-Total-Count'

server.listen(3000, () => {
  console.log('JSON Server is running')
})