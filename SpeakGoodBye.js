(function(Speak) {
	var speakWord = "Good Bye";
  	var byeSpeaker = function(name){
  		console.log(speakWord + " " + name);	
  	}	
  	
	Speak.byeSpeaker = byeSpeaker;
})(Speak);