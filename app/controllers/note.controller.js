
const note = require('../servers/note.servers')

exports.create = (req, res) => {

    if (!req.body.content) {
        // * 400 Bad Request	
        // * 500 Internal Server Error	
        // * 404 Not Found	
        return res.status(400).send({
            message: "note cannot be empty"
        });
    }
    var notedata = {
        title: req.body.title,
        content: req.body.content
    }

    note.create(notedata, (function (err, data) {
        if (err) {
            res.status(500).send({
                message: err.message || "Soame Error Occurred While Creating"
            })
        }
        res.json(data);
    }))
}

// * Find All Note
exports.findAll = (req, res) => {
    note.findAll(req, (function (err, data) {
        // console.log(notedata);  
        if (err) {
            res.status(404).send({
                message: err.message || "Soame Error Occurred While Creating"
            })
        }
        res.send(data);
    }))
}


// * Find One By Id
exports.findOne = (req, res) => {
    note.findOne(req.params.noteId, (function (err, data) {
        if (err) {
            res.status(404).send({
                message: err.message || "Soame Error Occurred While Creating"
            })
        }
        res.send(data);
    }))
}

// * Delete note by Id
exports.deleteOne = (req, res) => {
    note.deleteOne(req.params.noteId, (function (err, data) {
        if (err) {
            res.status(404).send({
                message: err.message || "Soame Error Occurred While Creating"
            })
        }
        res.send(data);
    }))
}

// * update the spcifice note Id
exports.update = (req, res) => {
    note.update(req, (function (err, data) {
        if (err) {
            res.status(404).send({
                message: err.message || "Soame Error Occurred While Creating"
            })
        }
        res.send(data);
    }))
}

