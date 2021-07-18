var startBtn=document.querySelector(".start-btn");
var startEl=document.querySelector(".start-quiz");
var questionsList=function(){
    var questionDataObj={
        id:" ",
        question:"Inside which HTML element do we put the JavaScript?",
        Option:{
            a:"<script>",
            b:"<js>",
            c:"<javascript>",
            d:"<scripting>",
        },
        answer:"a"
    }
    displayQuestion(questionDataObj);
};
function displayQuestion(){
    startEl.style.display="none";
}