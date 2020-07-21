//const clickMeBtn = document.getElementById('clickMeBtn')

//global veriable for temperature
var cel1 = 0.0;
var db = firebase.database();

//get data reading from the sensor
 setInterval(function(){
           function between(min,max){
    return Math.random() * (max - min) + min 
  }
  cel1 = (between(35.5,37.5)).toFixed(1);
    console.log("The temperature1 is:" , cel1);

}, (1000 * 5) ); //Display data on console every 5 seconds.

//Storing temperature data into Firebase RTDB
setInterval(function(){
        var ref = db.ref('/Patient1');
                 ref.once("value", function(snapshot){
                        console.log(snapshot.val());
                        });

        var tempRef = ref.child(Date());

                tempRef.set({
                        Celcius: cel1
                });

},(1000 * 10)); //Push data to Firebase RTDB every 30minutes.      

