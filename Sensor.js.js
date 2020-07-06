// [Start Include lib]
var firebase = require('firebase-admin');

var cel = 0.0;
const firebaseConfig = {
  apiKey: "AIzaSyAveLds-NKQXtjEklUmnopr2gtsovzUo4o",
  authDomain: "rasp-pi12345.firebaseapp.com",
  databaseURL: "https://rasp-pi12345.firebaseio.com",
  projectId: "rasp-pi12345",                                                                                                                               43        43,29         Top
  appId: "1:454450314706:web:ef88b66cbb8a616b9f9c0b"
};


var serviceAccount = require("./rasp-pi12345-firebase-adminsdk-jremy-753fa43534.json");

//initialize firebae
firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: "https://rasp-pi12345.firebaseio.com"
});

var db = firebase.database();

setInterval(function(){
           function between(min,max){
    return Math.random() * (max - min) + min 
  }
  cel = (between(35.5,37.5)).toFixed(1);
  console.log(new Date().toString("hh:mm tt"));
    console.log("Patient1 temperature is:" , cel);

    /*var ref = db.ref('/rasp-pi12345/Patient1');
                 ref.once("value", function(snapshot){
                        console.log(snapshot.val());
                        });

        var tempRef = ref.child(date());

                tempRef.set({
                        Celcius: cel
                });*/

}, (1000 * 5) ); //Display data on console every 5 seconds.

//Storing temperature data into Firebase RTDB
setInterval(function(){
  
           function between(min,max){
    return Math.random() * (max - min) + min 
  }
  cel = (between(35.5,37.5)).toFixed(1);
  console.log(new Date().toString("hh:mm tt"));
    console.log("Patient2 temperature is:" , cel);

       /* var ref1 = db.ref1('/rasp-pi12345/Patient2');
                 ref1.once("value", function(snapshot){
                        console.log(snapshot.val());
                        });

        var tempRef1 = ref1.child(date());

                tempRef1.set({
                        Celcius: cel
                });*/
},(1000 * 5) ); //Push data to Firebase RTDB every 30minutes