var today = moment();
var currentHour = moment().hours();
var saveBtn = $('.saveBtn')

//updates time at top
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

//function sets time block color based on current time
function setBlockColor () {

    $('.description').each(function() {
        var hour = parseInt($(this).attr('id'));
        if (currentHour < hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};


//function saves time and TODOs to local storage
saveBtn.on("click", function() {
    var time = $(this).attr("class").split(" ")[2]

    var task = $("#" + time).val()
    
    localStorage.setItem(time, task)

    }
);

//function gets each save from local storage
function getSave() {
    for (var i = 9; i < 17; i++) {
        $("#" + i).val(localStorage.getItem(i))

    }
};


setBlockColor()
getSave()