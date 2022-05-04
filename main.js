var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 
function start() { 
    document.getElementById("text_box").innerHTML = ""; 
    recognition.start();
 } 
    recognition.onresult = function(event) 
    { console.log(event);
    var Content = event.results[0][0].transcript; 
    document.getElementById("text_box").innerHTML = Content; 
    console.log(Content); 
    if(Content =="cheese") { 
       console.log("taking selfies --- "); 
    speak(); 
   } }

    function speak(){
       var synth = window.speechSynthesis;
       speak_data = "Taking your selfie in 3 seconds";
       var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      Webcam.attach(camera); 
      setTimeout(function()
      {
         take_snapshot();
      }, 3000);
    }

    setTimeout(function()
    {
       take_snapshot();
    }, 4000);


  setTimeout(function()
  {
     take_snapshot();
  }, 5000);

    Webcam.set({ 
       width:360, 
       height:250, 
       image_format : 'png', 
       png_quality:90 });
    camera = document.getElementById("camera");
    
    function take_snapshot()
    {
      console.log(img_id);
    
    Webcam.snap(function(data_uri) {
    if(img_id=="selfiel"){
    document. getElementById("result1").innerHTML = '<img id="selfiel" src=" '+data_uri+'"/>';
    }
    if(img_id=="selfie2"){
    document. getElementById("result2") . innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie3"){
      document. getElementById("result3") . innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
      }    
   });
    }

function save(){
   link = document.getElementById("link");
   image1 = document.getElementById("selfie1").src;
   link.href=image1;
   link.click();

   link = document.getElementById("link");
   image2 = document.getElementById("selfie2").src;
   link.href=image2;
   link.click();

   link = document.getElementById("link");
   image3 = document.getElementById("selfie3").src;
   link.href=image3;
   link.click();
}