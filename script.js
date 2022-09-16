var today = moment();
var currentHour = moment().hours();
var inputEl = $('.description');
var saveBtn = $('.saveBtn')

console.log (currentHour)

//updates time at top
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

//function sets time block color based on current time
function setBlockColor () {

    $('.description').each(function() {
        var hour = parseInt($(this).attr('id'));
        console.log(hour)
        if (currentHour < hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
    
}

// saveBtn.addEventListener("click", function() {



// })




setBlockColor()

//var time = moment("09:00:00 am")
//now.diff(time, "hours")


//