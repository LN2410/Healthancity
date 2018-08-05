
function displayBmis(){
        window.location.href = 'oobese.html';
}

function computeBMI() {
    //Obtain user inputs
   var height = Number(document.getElementById("height").value);
   var heightunits = document.getElementById("heightunits").value;
   var weight = Number(document.getElementById("weight").value);
   var weightunits = document.getElementById("weightunits").value;

   //Convert all units to metric
   if (heightunits == "inches") height /= 39.3700787;
   if (weightunits == "lb") weight /= 2.20462;

   //Perform calculation
   var BMI = weight / Math.pow(height, 2);
   //Display result of calculation
document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
   if (BMI < 18.5) document.getElementById("comment").innerHTML = "underweight";
   if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "normal";
   if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "overweight";
   if (BMI > 30) document.getElementById("comment").innerHTML = "obese";

   height.value = "";
   weight.value = "";
}




var showResults = document.getElementById("showresults");

function displayQuestion() {
window.location.href = 'questions.html';
    }




window.addEventListener('DOMContentLoaded', function(){

        var btnSubmit = document.querySelector('#getResults');

        btnSubmit.addEventListener('click', function(){
                var answers = [];
                var answer1 = document.querySelector("input[name='firstRadio']:checked").value
                var answer2  =document.querySelector('input[name="secondRadio"]:checked').value
                var answer3 = document.querySelector('input[name="thirdRadio"]:checked').value
                var answer4 = document.querySelector('input[name="fourthRadio"]:checked').value
                var answer5 = document.querySelector('input[name="fifthRadio"]:checked').value
                answers.push(answer1);
                answers.push(answer2);
                answers.push(answer3);
                answers.push(answer4);
                answers.push(answer5);

                if (answer1 === "some" && answer2 === "some" && answer3 === "some" && answer4 ==="some" && answer5 === "some")  {
                        showResults.innerHTML = "You are not having any major symptoms of depression. If you’re feeling down, you may just be having a few bad days or mood changes if you recently stopped smoking. <br> This quiz is not meant to tell you if you have major depression. This information does not take the place of seeing a mental health professional for a diagnosis. "
                }else if(answer1 === "never" && answer2 == "never" & answer3 == "never" & answer4 == "never" & answer5 == "never"){
                        showResults.innerHTML = "Looks like you fine there are no symptoms of depression yet <br> This quiz is not meant to tell you if you have major depression. This information does not take the place of seeing a mental health professional for a diagnosis. ";
                }else if (answer1 === "most" && answer2 == "most" & answer3 == "most" & answer4 == "most" & answer5 == "most") {
                        showResults.innerHTML = "maybe you should contact some doctors. It seems like you have symptoms of Depression. <br> This quiz is not meant to tell you if you have major depression. This information does not take the place of seeing a mental health professional for a diagnosis. ";
                }else if (answer1 === "most" && answer2 =="some" && answer3 === "never" && answer4 === "some" && answer5 ==="most") {
                        showResults.innerHTML = "Looks like you have no symptomps of depression <This quiz is not meant to tell you if you have major depression. This information does not take the place of seeing a mental health professional for a diagnosis. br> This quiz is not meant to tell you if you have major depression. This information does not take the place of seeing a mental health professional for a diagnosis. ";
                }else if (answer1 === "some" && answer2 =="never" && answer3 === "never" && answer4 === "some" && answer5 ==="most") {
                        showResults.innerHTML = "google";
                }else if (answer1 === "never" && answer2 =="most" && answer3 === "most" && answer4 === "most" && answer5 ==="some") {
                        showResults.innerHTML = "google";
                }





                console.log(answers);
        })
})
