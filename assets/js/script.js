//declare global variables for HTML elements I need to access as arrays
var rowEl = document.querySelectorAll('.task');
console.log(rowEl);
var timeBlockEl = document.querySelectorAll(".row");
console.log(timeBlockEl);



//start of function:
$(document).ready(function () {
    //adds today's date to the top of the page
    var dateTime = moment().format("MMM DD YYYY");
    $("#currentDay").text(dateTime);
    console.log(dateTime);

    //on button click start function
    $(".saveBtn").on("click", function () {
        //pulls text area input text and the hour-# id from HTML 
        var task = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");
        
        //saves time as key and task as key value in local storage
        // localStorage.setItem(time, JSON.stringify(task)); <= this is what I had initially not sure which is more correct? this would print task in qoutes "task"
        localStorage.setItem(time, task);    
    });
   
    //decalre variable for current time for conditional comparison
    var currentTime = moment().format("HH");
    console.log(currentTime);

    // loop through the variable for the timeblock divs
    for (let i = 0; i < timeBlockEl.length; i++) {
        //pulls the id from the divs in loop
        let hourNumber = timeBlockEl[i].id; 
        console.log(hourNumber);
        //gets the key that matches the id name
        localStorage.getItem(hourNumber);
        console.log(hourNumber);
        //places the key value into the text area
        rowEl[i].value = localStorage.getItem(hourNumber);
        //splits hour-# into [hour, #]
        let idHour = hourNumber.split('-');
        //references the data in indice 1 which is a number
        let singleHour = Number(idHour[1]);
        console.log(singleHour);

        //compares the current hour to the number in the id and assigns styling depending on how the numbers compare
        if (singleHour < currentTime) {
            rowEl[i].classList.add('past');
        } else if (singleHour == currentTime) {
            rowEl[i].classList.add('present');
        } else if (singleHour > currentTime) {
            rowEl[i].classList.add('future');
        }
    }

});

