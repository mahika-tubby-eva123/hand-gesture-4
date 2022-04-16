prediction_1 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img src = "'+data_uri+'" id = "capture_image"/>'; 
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8SCQEl9eU/model.json ', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResults);
}


function gotResults(error, results)
{ 
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if(results[0].label == "Amazing")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128076;";
        }
        if(results[0].label == "good")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "Victory")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#9996;";
        }
        if(results[0].label == "Alien Hi")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128406;";
        }
        if(results[0].label == "Rock")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#129304;";
        }
        if(results[0].label == "Hi")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128075;";
        }
        if(results[0].label == "Up")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128070;";
        }
        if(results[0].label == "Down")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128071;";
        }
        if(results[0].label == "Left")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128072;";
        }
        if(results[0].label == "Right")
        {
            document.getElementById("update_hand_gesture").innerHTML = "&#128073;";
        }
    }
}        
