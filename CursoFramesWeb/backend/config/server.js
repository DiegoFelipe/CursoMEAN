const port = 3045


const bodyParser = require('body-parser') // middleware faz o parser da requisição
const express = require('express') //FrameWork web NODE, usa middleware
const server = express()

server.use(bodyParser.urlencoded({ extended: true })) // formato dos dados vindo do frontend
server.use(bodyParser.json()) // os 2 serão aplicados a todas requisições

server.listen(port, function(){
  console.log(`Backend running on port ${port}`);
})

module.exports = server
