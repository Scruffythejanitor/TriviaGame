$(document).ready(function () {
    var playerScore = 0;
    var gameRunning = false;
    var questions = ["How many licks does it take to get to the center of a tootsie pop?", "two", "three"]
    var answers = {0:["1, TAHOO, 3, **Crunch**", "94", "651","364"], 1:["yes", "no", "maybe", "so"]}
    var correctAnswers = ["3",]
    var userAnswers = []
    var questionStep = 0
    var answerStep = 0
    var timer = 90
    var timerRunning = false;

    welcomeScreen()
    function welcomeScreen() {
        $('.game').html("<h1>Welcome!</h1><br><h2>Click To Get Started</h2>");
    }

    $(document).on('click', function(){
        $('.game').empty();
        gameStop()
        if (gameRunning === false) {
            $('.game').html("<h2>Instructions: You will be given a time limit to answer all of these questions. At the end of the game you will be presented with your grade, which will be added to your permanet record.</h2>");
            gameRunning = true;
            countdownTimer()
        } else {

            questionForm()
            buttonLabeler()
            $('.one').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push("0")
              })
            $('.two').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push("1")
              })
            $('.three').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push("2")
              })
            $('.four').on('click', function () {
                questionStep++
                answerStep++
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

    function compareAnswers() {
        if (correctAnswers[0] === userAnswers[0]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[1] === userAnswers[1]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[2] === userAnswers[2]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[3] === userAnswers[3]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[4] === userAnswers[4]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[5] === userAnswers[5]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[6] === userAnswers[6]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
        if (correctAnswers[7] === userAnswers[7]) {
            guessedCorrect++
        } else {
            guessedWrong++
        }
    }

    function buttonLabeler() {
        var buttonOne = answers[answerStep][0]
                $('.one').text(buttonOne)

        var buttonTwo = answers[answerStep][1]
                $('.two').text(buttonTwo)

        var buttonThree = answers[answerStep][2]
                $('.three').text(buttonThree)

        var buttonFour = answers[answerStep][3]
                $('.four').text(buttonFour)
    }

    function countdownTimer() {
        if (timerRunning = false) {
            
            var interval = setInterval(function() {
                timer--;
                if (timer == 0) {
                clearInterval(interval);
                }
            }, 1000);
            timerRunning = true;
        }
        $('.counter').html("<h2>"+ timer +"</h2>");
    }
    countdownTimer()

    function gameStop() {
        if (questionStep === 7) {
            
               setTimeout(function(){
                $('.game').html("<h2>Lets See How You Did!</h2>");
               }, 1000);
               setTimeout(function(){
                $('.game').html("<h2>Your Score Was: "+ playerScore +"</h2>");
               }, 6000);
        }
    }


});