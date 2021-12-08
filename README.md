# HW9_NoteTaker
---

This is my not taker assignment.

Here is how to navigate it:
>When brought to the home page, you will be greeted with a button.
>When a box's text area is clicked on, the user then may enter whatever text they wish.
>The text can be saved by redirecting you mouse to the save icon and click the icon.
>Once the text has been saved, you can refresh your page to see that the text is still in the designated box!
>Enjoy!

Here is a sample of how the website will look:

![Homepage](index.js)
![Code](script.js)

##Lessons learned from the assignment.
---

>This was a challenging assignment at times, though I was able to better understand how to work with web apis and local storage properly.

>Understanding how API's work is an incredible resource skill to develop, I hope to dedicate more into discovering powerful API's to work with.

### _Sources that helped me create this markdown._
---

*[Mike Dane](https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw) from YouTube.
*[W3Schools](https://www.w3schools.com/cssref/pr_class_position.asp)
*[TechnicalCafe](https://www.youtube.com/watch?v=9sT03jEwcaw&t=1006s) from YouTube.
*[StackOverflow](https://stackoverflow.com/questions/42603033/uncaught-typeerror-cannot-set-property-textcontent-of-null)
*[FreeCodeCamp](https://forum.freecodecamp.org/)

>Displaying data from local storage was a new obstacle to accomplish for me. It took a lot of tweaking and help from third parties but was finally able to get the scores to display the way I was hoping for.

```js

    function updateEvent(id, value) {

        var eventArray = JSON.parse(localStorage.getItem("name")) || [];

        eventArray[id] = value;

        localStorage.setItem('name', JSON.stringify(eventArray))
    }

    Array.from(rows).forEach(row => {
        // console.log(row);
        var rowTime = parseInt(row.children[0].dataset.hour);
        // console.log(rowTime);
        var formatHour = parseInt(moment().format('H'));
        // console.log(formatHour)

        // Compares row id to current hour and sets color accordingly
        if (formatHour === rowTime) {
            setColor(row, "red");
        } else if (formatHour < rowTime) {
            setColor(row, "green");
        } else if (formatHour > rowTime) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    });


    function setColor(element, color) {
        element.style.backgroundColor = color;
    }


    $('.container').on('click', '.fa-save', function (e) {
        const id = e.target.dataset.index
        const value = $(`#eventText-${id}`).val().trim()
        console.log(value);
        updateEvent(id, value);
    });
}

```


However, this is all dont with how the user information was stored, these variables are how the project was mapped out:
```js
    const grid = $(".container")
    const saveButton = document.getElementById('save-btn')
    const rows = document.getElementsByClassName("row");
    let m = moment();
    var today = moment().format("MMM Do, YYYY, h:mm:ss a");
    $("#moment").text('Today is: ' + today);
    var hourPast = hourPast < m;
    var hourNow = m;
    var hourFuture = hourFuture < m;

    let currentHour = parseInt(moment().format('H'));

    const savedEvent = JSON.parse(localStorage.getItem("name")) || []
    console.log(savedEvent)
    for (let i = 0; i < savedEvent.length; i++) {
        $(`#eventText-${i}`).val(savedEvent[i])

```

>This project was a great example of how to work on project in a local environment. It is a personal application that is unique to the user and I believe that this would be a very useful app tool to develop for future use.
