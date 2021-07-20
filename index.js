const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.use(auth)
app.use(router)

const PORT = process.env.PORT || 9000

app.listen(PORT, ()=>{
  console.log('Json server is Run!!!!!');
})