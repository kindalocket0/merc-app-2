const express = require('express')
const router = express.Router()
const helpers = require('../helpers/notes')

router.route('/').get(helpers.getNotes).post(helpers.createNote)
router.route('/:noteId').delete(helpers.deleteNote)

module.exports = router
