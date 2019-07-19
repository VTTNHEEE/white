console.log("LOADED")

var timer = document.getElementById("timer")

var end = new Date("July 19 2019 19:15:00").getTime();
// end = (new Date).getTime() + 3000;

setInterval(function(){
var now = (new Date).getTime();

if(end - now <= 0){
  var colour = timer.style.color;
  if(colour == "black"){
    timer.style.color = "red"
    return}
  timer.style.color = "black";
  return
}


function f(d){
  return ("0" + d).slice(-2);
}

function dhm(ms){
    days = Math.floor(ms / (24*60*60*1000));
    daysms=ms % (24*60*60*1000);
    hours = Math.floor((daysms)/(60*60*1000));
    hoursms=ms % (60*60*1000);
    minutes = Math.floor((hoursms)/(60*1000));
    minutesms=ms % (60*1000);
    sec = Math.floor((minutesms)/(1000));
    return f(days)+":"+f(hours)+":"+f(minutes)+":"+f(sec);
}

timer.innerText = dhm(end - now)
timer.style.visibility = "visible";
}, 1000);
