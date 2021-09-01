const { Schema, model } = require('mongoose')

const NoteSchema = new Schema({
  note: String,
  timeCreated: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
})

module.exports = model('Note', NoteSchema)
