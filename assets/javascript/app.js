$(document).ready(function () {
    var playerScore = 0;
    var gameRunning = false;
    var questions = ["How many licks does it take to get to the center of a tootsie pop?", "two", "three"]
    var answers = {0:["1, TAHOO, 3, **Crunch**", "94", "651","364"], 1:["yes", "no", "maybe", "so"]}
    var correctAnswers = ["3",]
    var userAnswers = []
    var questionStep = 0
    var answerStep = 0
    var guessedCorrect = 0
    var guessedWrong = 0

    console.log(answers[1][0]);
    console.log(userAnswers);
    welcomeScreen()
    function welcomeScreen() {
        $('.game').html("<h1>Welcome!</h1><br><h2>Click To Get Started</h2>");
    }

    $(document).on('click', function(){
        $('.game').empty();
        
        if (gameRunning === false) {
            $('.game').html("<h2>Instructions: You will be given a time limit to answer all of these questions. At the end of the game you will be presented with your grade, which will be added to your permanet record.</h2>");
            gameRunning = true;
        } else {
            // console.log("first question");
            questionForm()
            $('.one').on('click', function () {
                console.log('button one was clicked');
                questionStep++
                userAnswers.push("0")
              })
            $('.two').on('click', function () {
                console.log('button two was clicked');
                questionStep++
                userAnswers.push("1")
              })
            $('.three').on('click', function () {
                console.log('button three was clicked');
                questionStep++
                userAnswers.push("2")
              })
            $('.four').on('click', function () {
                console.log('button four was clicked');
                questionStep++
                userAnswers.push("3")
              })
        }
    })

    function questionForm() {
        $('.question').text(questions[questionStep])
        $('.game').html('<button class="btn one">Button One</button>' 
        + '<button class="btn two">Button One</button>' 
        + '<button class="btn three">Button three</button>' 
        + '<button class="btn four">Button four</button>');
        
    }








});