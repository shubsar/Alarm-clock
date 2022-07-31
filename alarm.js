var timer= document.getElementById("timer");    //variables are declared which is fetched using respective ID's.
var hours= document.getElementById("hours");
var minutes= document.getElementById("minutes");
var seconds= document.getElementById("seconds");
var ampm= document.getElementById("ampm");
var startstop= document.getElementById("startstop");
console.log("clock");

var currentTime;
var alarmElement;
var activeAlarm= false;
 
 var sound=new Audio("abc.mp3");
 sound.loop=true;



function showTime(){                  //showTime is the main function which is written to get the current time and the condition at which the alarm rangs.
	
	var now=new Date();
	currentTime=now.toLocaleTimeString();
	

	if(currentTime===alarmElement){   //when this condition will strike the alarm will start ringing.
		 sound.play();
		}
	
	timer.textContent=currentTime;
	setTimeout(showTime,1000);
}
showTime();

function addMinSec(id){   //This is the function used to adjust the minutes and seconds for the alarm.
	var select= id;
	var min= 59;

	for(i=0;i<=min;i++){
		select.options[select.options.length]=new Option(i<10?"0"+i:i);
	}

}
 

function addHour(id){  //This is the function used to adjust the hours for the alarm.
	var select=id;
	var min=12;

	for(i=0;i<=min;i++){
		select.options[select.options.length]=new Option(i<10?"0"+i:i);
	}
}

addHour(hours);  //calling these functions to set the time .
addMinSec(seconds);
 addMinSec(minutes);



startstop.onclick=function(){
	if(activeAlarm===false){   //If the alarm is already set then these variables are made disabled.
		hours.disabled=true;
		minutes.disabled=true;
		seconds.disabled=true;
		ampm.disabled=true;


		alarmElement=hours.value+":"+minutes.value+":"+seconds.value+" "+ampm.value; //Alarm element is the value at which we want the alarm to start ringing.
		this.textContent="Clear Alarm";
		activeAlarm=true;

	}
	else{
		hours.disabled=false;
		minutes.disabled=false;
		seconds.disabled=false;
		ampm.disabled=false;

		sound.pause();    //After clearing the alarm the sound must stop.
		this.textContent="Set Alarm";
		activeAlarm=false;
	}
}
