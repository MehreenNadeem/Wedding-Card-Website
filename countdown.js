   // Set the date we're counting down to
var dest = new Date("oct 13, 2023  10:00:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
     // Find the distance between now and the count down date
    var diff = dest - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor (diff/ (1000*60*60*24)); console.log(days);
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ; console.log(hours);
    var minutes = Math.floor (diff % (1000*60*60) / ( 1000*60)); console.log(minutes);
    var seconds = Math.floor (diff % (1000*60) / (1000) );console.log(seconds);
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("hours").innerHTML = hours;
    // If the count down is over, write some text 
     if (distance < 0) {
        clearInterval(x);
         document.getElementsByClassName("timer").innerHTML = "00";
      }
  }, 1000);