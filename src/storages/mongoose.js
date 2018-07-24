const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/example-api', {useNewUrlParser: true}).catch(console.error)
mongoose.connection.on('connected', ()=> console.log('connected'))
