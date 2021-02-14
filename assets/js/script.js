var rootEl = $('#task');
console.log(rootEl);
// let task;


// let valueArray = [];
$(document).ready(function () {
   
    //check for button clicks inside an on click
    $(".saveBtn").on("click", function () {
        //grab my values for time and text
        var task = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");
        // console.log(task, time);
        //save them to localStorage
        localStorage.setItem('time', JSON.stringify(time));
        localStorage.setItem('task', JSON.stringify(task));  
    });
   
    //write a function to update the hours in the time blocks
    let timeArray = [];
    timeArray.push(JSON.parse(localStorage.getItem('time')));
    console.log(timeArray);
    // //get current time use moment
    var currentTime = moment().format("hh");
    $("#4a").text(currentTime);
    console.log(currentTime);
  

    // //loop over our time blocks hint (look up .each)
    for (let i = 0; i < timeArray.length; i++) {
        let hourNumber = timeArray[i].split('-');
        var taskTime = hourNumber[1];
        console.log(taskTime);
        // //check to see if we have moved past the current time
        // //if
        // //addClass
        // //addClass("past")
       
        if (taskTime < currentTime) {
            console.log(time);
            rootEl.addClass('bg-secondary', 'past');
        }
    

    // //check to see if it is the current time
    // //else if
    // //removeClass
    // //addClass

    // //check to see if time is future
    // //else
    // //removeClass
    // //removeClass
    // //addClass
    // //});
    // //load any saved data from localStorage

    // // $("#hour-9 .task").val(localStorage.getItem.length("hour-9"));
    }
    // //display current day on page (using moment)
});

// //activity 04-26 global array 
// // 