(function(Speak) {
	var speakWord = "Hello";
  	var helloSpeaker = function(name){
  		console.log(speakWord + " " + name);	
  	}	
  	
	Speak.helloSpeaker = helloSpeaker;
})(Speak);