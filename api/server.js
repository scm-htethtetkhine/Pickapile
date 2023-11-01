var jsonServer = require('json-server')
var server = jsonServer.create()

server.use(jsonServer.defaults)

server.post('login', function (req, res) {
  res.sendStatus(404)
})

server.use(jsonServer.router('PickAPile.json'))

server.listen(3000)