const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://admin:${process.env.DBPASSWORD}@cluster0.e5gzt.mongodb.net/mercnotes?retryWrites=true&w=majority`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('connected to db')
})

mongoose.Promise = Promise

module.exports.Notes = require('./notes')
