// dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

// Async processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

//static middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// api get request
app.get("/api/notes", function (req, res) {
    readFileAsync("./db/db.json", "utf8").then(function (data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes)
    })
});

//api post request
app.post('/api/notes', function (req, res) {
    console.log(req.body)
    const note = req.body;
    readFileAsync('./db/db.json', 'utf8').then(function (data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length + 1
        notes.push(note);
        return notes
    }).then(function (notes) {
        writeFileAsync('./db/db.json', JSON.stringify(notes));
        res.json(note)
    })

});

//api delete request
app.delete('/api/notes/:id', function (req, res) {
    const deleteNote = parseInt(req.params.id);
    readFileAsync('./db/db.json', 'utf8').then(function (data) {
        const notes = [].concat(JSON.parse(data));
        const newNoteArr = []
        for (let i = 0; i < notes.length; i++) {
            if (deleteNote !== notes[i].id) {
                newNoteArr.push(notes[i])
            }
        }
        return newNoteArr
    }).then(function (notes) {
        writeFileAsync("./db/db.json", JSON.stringify(notes))
        res.send('note saved!');
    })
})

// HTML route
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//port
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
});