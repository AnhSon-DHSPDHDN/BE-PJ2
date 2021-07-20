const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.use(auth)
app.use(router)
app.listen(9000)