const router = require('express').Router();

const { notes } = require('../../db/db.json');

const { createNewNote, deleteNote  } = require('../../lib/noteFunction');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});

module.exports= router;