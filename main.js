 var Speechrecognition = window.webkitSpeechRecognition;

 var Recognition = new Speechrecognition();
 
 function start(){
     document.getElementById("textbox").innerHTML="";
     Recognition.start();
 }
 Recognition.onresult = function run(event){
      console.log(event);
      var content = event.results[0][0].transcript;
      document.getElementById("textbox").innerHTML=content;
      if (content =="take my selfie"){
          console.log("take my selfie");
          speak();

      }
 }
 
 function speak(){
     var synth = window.speechSynthesis;

    var speak_data = "taking your selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
 }

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
var camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
        
    });
}


function save(){
    img = document.getElementById("selfie_image").src;
    link = document.getElementById("link");
    link.href=img;
    link.click(); 
}
