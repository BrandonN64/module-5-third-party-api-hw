var saveButton = $(".save");
var currentDay = $("#momentDay");

function dailyPlanner(){
    currentDay.text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i <= 17; i++){
        var currentTime = "time-" + i;
        var timeBlockEl = $("#"+ currentTime);
        if (moment().hour() > i){
            timeBlockEl.children("textarea").addClass("past");} 
        else if (moment().hour() === i) {
            timeBlockEl.children("textarea").addClass("present");} 
        else {
            timeBlockEl.children("textarea").addClass("future");}
        var plannerTask = localStorage.getItem(currentTime);
        if (plannerTask) {
            timeBlockEl.children("textarea")[0].value = plannerTask;}}
}
saveButton.on("click", function() {
    var parentElement = $(this).parent();
    var currentTime = parentElement.attr("id");
    var plannerTask = parentElement.children("textarea")[0].value;
    if (plannerTask){
        localStorage.setItem(currentTime, plannerTask);
    } else {
        localStorage.setItem(currentTime, "");
    }
});

dailyPlanner();