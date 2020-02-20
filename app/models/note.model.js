const mongoose = require('mongoose');

// Create Data Schema
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    // show updated and created time
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);