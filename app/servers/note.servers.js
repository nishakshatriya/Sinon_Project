
const Note = require('../models/note.model')

exports.create = (notedata, callback) => {
    if (!notedata) {
        callback({ message: "Soame Error Occurred While Creating" })
    }

    const note = new Note()
    note.title = notedata.title,
        note.content = notedata.content


    note.save()
        .then(data => {
            callback(null, data)
        }).catch(err => {
            callback({ message: "Soame Error Occurred While Creating in servers" })
        })
}

exports.findAll = (data, callback) => {
    Note.find()
        .then(note => {
            callback(null, note);
        }).catch(err => {
            callback({ message: "Note not found with id: " })
        })
}

exports.findOne = (data, callback) => {
        Note.findById(data)
        .then(note => {
            callback(null, note);
        }).catch(err => {
            callback({ message: "Note not found with id: " })
        })
}

exports.deleteOne = (data, callback) => {
    Note.findOneAndDelete(data)
        .then(note => {
            callback(null, note);
        }).catch(err => {
            callback({ message: "Note not found with id: " })
        })
}

exports.update = (data, callback) => {
    Note.updateOne({ "_id": data.params.noteId }, { $set: { 'title': data.body.title } })
        .then(note => {
            callback(null, note);
        }).catch(err => {
            callback({ message: "Note not found with id: " })
        })
}



