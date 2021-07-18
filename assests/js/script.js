var questionCounter=0;
var que=document.querySelector(".question");
var a=document.querySelector("#a");
var b=document.querySelector("#b");
var c=document.querySelector("#c");
var d=document.querySelector("#d");
var questionsList=function(){
    var questionDataObj={
        id:" ",
        question:"Inside which HTML element do we put the JavaScript?",
        a:"<script>",
        b:"<js>",
        c:"<javascript>",
        d:"<scripting>",
        answer:"a"
    }
    displayQuestion(questionDataObj);
};
var displayQuestion=function(questionDataObj){
    questionCounter++;
    questionDataObj.id=questionCounter;
    que.textContent=questionDataObj.id+"."+questionDataObj.question;
    a.textContent="a."+questionDataObj.a;
    b.textContent="b."+questionDataObj.b;
    c.textContent="c."+questionDataObj.c;
    d.textContent="d."+questionDataObj.d;
};
questionsList();