const app = require('./app')

const server = app.listen(3000)

server.on('error', (err)=>{console.log(err.message)})
server.on('listening', ()=>{console.log('listening')})

