var rootEl = document.querySelectorAll('.task');
console.log(rootEl);
var timeBlockEl = document.querySelectorAll(".row");
console.log(timeBlockEl);
// let task;


// let valueArray = [];
$(document).ready(function () {
    var dateTime = moment().format("MMM DD YYYY");
    $("#currentDay").text(dateTime);
    console.log(dateTime);

    //check for button clicks inside an on click
    $(".saveBtn").on("click", function () {
        //grab my values for time and text
        var task = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");
        
        //save them to localStorage
        localStorage.setItem(time, JSON.stringify(task));    
    });
   
    var currentTime = moment().format("HH");
    console.log(currentTime);

    // //loop over our time blocks hint (look up .each)
    for (let i = 0; i < timeBlockEl.length; i++) {
        let hourNumber = timeBlockEl[i].id; 
        console.log(hourNumber);
        localStorage.getItem(hourNumber);
        console.log(hourNumber);
        rootEl[i].value = localStorage.getItem(hourNumber);
        
        let idHour = hourNumber.split('-');
        let singleHour = Number(idHour[1]);
        console.log(singleHour);

        if (singleHour < currentTime) {
            rootEl[i].classList.add('past');
        } else if (singleHour == currentTime) {
            rootEl[i].classList.add('present');
        } else if (singleHour > currentTime) {
            rootEl[i].classList.add('future');
        }
    }

});

