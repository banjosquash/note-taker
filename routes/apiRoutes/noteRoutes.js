const router = require('express').Router();

const { notes } = require('../../develop/db/db');

const { createNewNote } = require('../../lib/noteFunction');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports= router;