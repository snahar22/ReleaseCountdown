let eventDate = new Date('June 25, 2021 00:00:00');

let x = setInterval(function(){
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
    let eventTime = eventDate.getTime();
    let realTime = eventTime - currentTime;

    let days = Math.floor(realTime/(1000* 60 * 60 * 24));
    let hours = Math.floor((realTime%(1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    let minutes = Math.floor((realTime%(1000*60* 60))/(1000*60));
    let seconds = Math.floor((realTime%(1000*60))/1000);

	document.getElementById('days').innerHTML = days + '<br>' + "Days";
	document.getElementById('hours').innerHTML = hours + '<br>' +  "Hours";
	document.getElementById('minutes').innerHTML = minutes + '<br>' +  "Minutes";
	document.getElementById('seconds').innerHTML = seconds + '<br>' + "Seconds";

	if(realTime <= 0){
		clearInterval
	}
},1000);

