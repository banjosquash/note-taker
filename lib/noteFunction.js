const fs = require('fs');
const path = require('path');

function createNewNote (body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteArray
        }, null, 2)
    )
    return note;
};

function deleteNote (noteArray, id) {
    let deleteId = parseInt(id);
    noteArray.splice(deleteId, 1);

    for(let i = deleteId; i < noteArray.length; i ++){
        noteArray[i].id = i.toString();
    }

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({notes:noteArray}, null, 2)
    )
};

module.exports = {createNewNote, deleteNote};