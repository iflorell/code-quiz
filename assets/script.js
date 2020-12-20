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
    instructions.textContent = ("Your score is the number of correct answers times "+problemTime+", plus the time remaining. Careful - wrong answers will also subtract "+penalty+" seconds from the time remaining!");

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

       
        while (0 !== currentIndex) {

            
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    
    function setQuestion(index) {
        questText.textContent = questions[index].title;
        let choiceArray = questions[index].choices
        choiceArray = shuffle(choiceArray)      
        a.textContent = choiceArray[0];
        b.textContent = choiceArray[1];
        c.textContent = choiceArray[2];
        d.textContent = choiceArray[3];
    }

   
    startBtn.addEventListener("click", function () {
        initCard.style.display = "none";
        questCard.style.display = "block";
        beginGame();
    });

    
    scoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (scoreShown) {
            scoreShown = false;
            scoreCard.style.display = "none";
        } else {
            scoreShown = true;
            scoreCard.style.display = "block";
        }
        scoreSet();
    });

    scoreCard.style.display = "none";  

   
    clearBtn.addEventListener("click", function (event) {
        event.preventDefault();
        clearScores();
    });

    
    var addBtns = document.getElementsByClassName("answerBtn");
    for (var i = 0; i < addBtns.length; i++) {
        
        addBtns[i].addEventListener("click", userChoice, false);

    }

   
    scoreSet();
