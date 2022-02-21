prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'/>";
    });
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/o-fEqyW7u/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    var speak_data1="first prediction is "+prediction_1;
    var speak_data2="and the second prediction is "+prediction_2;    
    var utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}