document.addEventListener("DOMContentLoaded", function (event) {  
    var startBtn = document.getElementById("startButton");
    var initCard = document.getElementById("initalCard");
    var questCard = document.getElementById("questionCard");
    var timerDisp = document.getElementById("timer");
    var alert = document.getElementById("alert");
    var footer = document.getElementById("footer");
    var scoreLink = document.getElementById("scoreLink");
    var scoreCard = document.getElementById("scoreCard");
    var highScoreList = document.querySelector("#highScore-list");
    var instructions = document.getElementById("instructions");


    var questText = document.getElementById("questionPrompt");
    var clearBtn = document.getElementById("clearBtn");
    var clearBtnArea = document.getElementById("clearBtnArea");

   
    var a = document.getElementById("AAnswer");
    var b = document.getElementById("BAnswer");
    var c = document.getElementById("CAnswer");
    var d = document.getElementById("DAnswer");
    
    var aBtn = document.getElementById("AAnswerBtn");
    var bBtn = document.getElementById("BAnswerBtn");
    var cBtn = document.getElementById("CAnswerBtn");
    var dBtn = document.getElementById("DAnswerBtn");

   
    var problemTime = 10;   
    var penalty = 5;        
    var iter = 0;
    var timer = 75;
    var endTime = 0;
    var correct = 0;
    var wrong = 0;
    var user = "";
    var score = 0;
    var newQuestions = questions;
    var scoreList = [];
    var maxScore = 0;
    var scoreShown = false;
