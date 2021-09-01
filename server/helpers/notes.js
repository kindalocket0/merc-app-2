const db = require('../models')

exports.getNotes = async (req, res) => {
  try {
    res.json(await db.Notes.find())
  } catch (error) {
    console.log(error)
  }
}

exports.createNote = async (req, res) => {
  try {
    res.status(201).json(await db.Notes.create(req.body))
  } catch (error) {
    console.log(error)
  }
}

exports.deleteNote = async (req, res) => {
  db.Notes.findByIdAndDelete(req.params.noteId)
    .then(() => res.json({ message: 'Deleted' }))
    .catch((error) => console.log(error))
}
