// let timeArray = [];
// let valueArray = [];
$(document).ready(function () {
   
    //check for button clicks inside an on click
    $(".saveBtn").on("click", function () {
        //grab my values for time and text
        var value = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");
        //save them to localStorage
        localStorage.setItem(time, value);
        console.log(time, value);
        // timeArray.push(time);
        // valueArray.push(value); 
        
    });


    //write a function to update the hours in the time blocks
    var timeArray= localStorage.getItem(time);
    console.log(timeArray);

    //get current time use moment
    var currentTime = moment().format("hh:mm:ss");
    $("#4a").text(currentTime);
    console.log(currentTime);
   

    //loop over our time blocks hint (look up .each)
    $(placeholder for this line).each(function(){

    
    //check dto see if we have moved past the current time
    //if
    //addClass
    //addClass("past")

    //check to see if it is the current time
    //else if
    //removeClass
    //addClass

    //check to see if time is future
    //else
    //removeClass
    //removeClass
    //addClass
    });
    //load any saved data from localStorage

    $("#hour-9 .task").val(localStorage.getItem.length("hour-9"));

    //display current day on page (using moment)
});

//activity 04-26 global array 
// 