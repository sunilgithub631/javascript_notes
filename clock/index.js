
function currentTime(){
    var date=new Date()
var hours=date.getHours()
var min=date.getMinutes()
var sec=date.getSeconds()
let session="AM"

if(hours==0) {hours=12}
if(hours>12){
    hours=hours-12
    session="PM"
}
hours=(hours<10) ? "0"+hours:hours;
min=(min<10) ? "0"+min:min;
sec=(sec<10) ? "0"+sec:sec;
    document.getElementById("clock").innerText=hours+":"+min+":"+sec+" "+session
    setInterval(function(){currentTime()},1000)
}
currentTime()
