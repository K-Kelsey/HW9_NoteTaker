# HW9_NoteTaker
---

This is my not taker assignment.

Here is how to navigate it:
>When brought to the home page, you will be greeted with a button to start the note taker application.
>Once the application starts, you can begin adding notes to your collection. Click on the text box of the user's desired input (title or body) and fill in what whimsical wonders your brain conjures.
>The text can be saved by redirecting you mouse to the save icon in the top right of the viewport and click the save icon button.
>Once the text has been saved, you can refresh your page to see that the text has been saved to the right side of your page. If desired, you can click the red trash can icon and delete whichever notes have served its purpose.

Here is a sample of how the website will look:

![Homepage](https://enigmatic-journey-53027.herokuapp.com)
![Code](server.js)

##Lessons learned from the assignment.
---

>This assignment was great practice with deploying a live application. Heroku seemed simple in theory but I found myself running into quite a few issues when trying to deploy the final application.

>Another lesson being how 

### _Sources that helped me create this markdown._
---

*[Mike Dane](https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw) from YouTube.
*[geekforgeeks](https://www.geeksforgeeks.org/)
*[W3Schools](https://www.w3schools.com)
*[StackOverflow](https://stackoverflow.com)
*[FreeCodeCamp](https://forum.freecodecamp.org/)

>Writing to files is still a bit of a hazy concept for me, coding the write syntax for asynchronous functions and of coure, producing the right files. Fortunately with many documents and youtube tutorials, things started to make a little more sense.

```js

   // Async processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


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

```


However, when trying to delete a note, and not the entire list; that became a confusing process quickly. Eventually the working end product looked something like this:
```js
    
// Delete the clicked note
const handleNoteDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const note = e.target;
  const noteId = JSON.parse(note.parentElement.getAttribute('data-note')).id;

  if (activeNote.id === noteId) {
    activeNote = {};
  }

  deleteNote(noteId).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

```

>This project was a great example of how to build a responsive app unique to the user. Deploying the app took some debugging to eventually work, however now that I have that better understanding of how to work with heroku in my terminal, I am excited to start deploying more fun applications!