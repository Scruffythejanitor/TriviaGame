$(document).ready(function () {
    var playerScore = 0;
    var gameRunning = false;
    var questions = ["Rick uses a ____ to escape bad situations.", "What does wubba lubba dub dub mean?", "What does Jerry do on his tablet?", "I'm Mr. Meeseeks, ________", "Morty is in love with:", "Beth shoots what long time family friend?", "The name of the guy who \"Just loves killin\' people\"", "What does Beth Do for work?"];
    var answers = { 0: ["Spaceship", "Portal Gun", "Morty", "Memory Ray"], 1: ["Party!", "I am the greatest!", "S#!t yeah motherf%!ker!", "I'm in great pain."], 2: ["Pop baloons.", "Google himself.", "Watch interdimensional cable.", "Jerry has a tablet?"], 3: ["Let's kill him!", "Look at me!", "Nice to meet you!", "Give me a beer!"], 4: ["Jessie", "Jennifer", "Jessica", "Jinny"], 5: ["Pencilvester", "Sleepy Gary", "Mr. Beauregard", "Mr. Poopy Butthole"], 6: ["Jaguar", "Krombopulos Michael", "Evil Rick", "Fart"], 7: ["Doctor", "Stay at home mom", "Marketing", "Horse Surgeon"] };
    var correctAnswers = ["1", "3", "0", "1", "2", "3", "1", "3",];
    var userAnswers = [];
    var questionStep = 0;
    var answerStep = 0;
    var timer = 90;
    var intervalId = null;

    welcomeScreen()
    function welcomeScreen() {
        $('.game').html("<h1>Rick & Morty Time!</h1><br><h2>Click To Get Schwifty</h2>");
    }

    $(document).on('click', function () {
        gameStop()
        $('.game').empty();
        if (gameRunning === false) {
            $('.counter').empty()
            $('.game').html("<h2>Instructions:</h2><br><h3>You will be given a time limit to answer all of these questions. At the end of the game you will be presented with your grade, which will be added to your permanet record.</h3>");
            gameRunning = true;
            $(document).on('click', function () {
                countdownTimer()
            })
        } else {
            questionForm()
            buttonLabeler()

            console.log();
            $('.one').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push('0')
                console.log(userAnswers);
            })
            $('.two').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push('1')
                console.log(userAnswers);
            })
            $('.three').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push('2')
                console.log(userAnswers);
            })
            $('.four').on('click', function () {
                questionStep++
                answerStep++
                userAnswers.push('3')
                console.log(userAnswers);
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
        if (userAnswers[0] === correctAnswers[0]) {
            playerScore++;
        }
        if (correctAnswers[1] === userAnswers[1]) {
            playerScore++;
        }
        if (correctAnswers[2] === userAnswers[2]) {
            playerScore++;
        }
        if (correctAnswers[3] === userAnswers[3]) {
            playerScore++;
        }
        if (correctAnswers[4] === userAnswers[4]) {
            playerScore++;
        }
        if (correctAnswers[5] === userAnswers[5]) {
            playerScore++;
        }
        if (correctAnswers[6] === userAnswers[6]) {
            playerScore++;
        }
        if (correctAnswers[7] === userAnswers[7]) {
            playerScore++;
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

    function displayCurrentTime() {
        currentTime = timeConverter(timer)

        $('.counter').text(currentTime)
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    function gameStop() {
        if (timer <= 1 || questionStep === 8) {
            stop()
            compareAnswers()
            $('.question').empty()
            endText()
        }
        // if (questionStep === 7) {
        //     stop()
        //     compareAnswers()
        //     $('.question').empty()
        //     endText()
        // }
    }

    function endText() {
        // compareAnswers()
        setTimeout(function () {
            $('.game').html("<h2>Lets See How You Did!</h2>");
        }, 0);
        setTimeout(function () {
            $('.game').html("<h2>Your Score Was: " + playerScore + "/8</h2>");
        }, 6000);
        setTimeout(function () {
            $('.game').html("<h2>Click To Play Again!</h2>");
            resetGame()
        }, 12000);

    }

    function count() {

        timer--;
        displayCurrentTime()
    }

    function countdownTimer() {
        var clockIsNotRunning = intervalId === null;
        if (clockIsNotRunning) {
            intervalId = setInterval(function () {
                if (timer <= 1) {
                    stop()
                    gameStop()
                }
                count();

            }, 1000)
        }
    }


    function stop() {
        clearInterval(intervalId);
        intervalId = null;
        displayCurrentTime();
    }

    function resetGame() {
        playerScore = 0;
        intervalId = null;
        questionStep = 0;
        answerStep = 0;
        timer = 90;
        userAnswers = [];
        gameRunning = false;

    }

});