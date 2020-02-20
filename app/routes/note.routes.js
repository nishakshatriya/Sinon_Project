module.exports = (app) => {
    // Create a notes to provide the note.controller
     const notes = require('../controllers/note.controller')


    //Create a New Note
    app.post('/notes',notes.create);

    //Retrieve all Notes
    app.get('/notes',notes.findAll);

    // //Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne)

    // //Update specific noteID note
    app.put('/notes/:noteId', notes.update);

    // //Delete the specific noteId note
    app.delete('/notes/:noteId', notes.deleteOne);

}