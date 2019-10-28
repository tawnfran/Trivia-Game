// when page loads, start timer 
// $(document).ready(function () {
//     setTimeout(myFunction, 3000);
// });


    //calculate score for right and wrong answers
    //startbutton.onclick
    //hide start button once they click 
    //function compare to see if user is right or wrong 
    
    // $("#button").click(function() {
    // alert(" ");
    // });




var questions = [
    { //q1
        q: "How many days are in one year?",
        a1: "367",
        a2: "435",
        a3: "356",
        a4: "365",
        correct: "365"
    },

    { //2
        q: "What is the most populus state in the U.S.?",
        a1: "Florida",
        a2: "New Jersey",
        a3: "California",
        a4: "New York",
        correct: "California"
    },

    { //3
        q: "Who was the first American to go into space?",
        a1: "Lance Armstrong",
        a2: "Alan Shepard",
        a3: "Jerry Springer",
        a4: "George Washington",
        correct: "Alan Shepard"
    },

    { //4
        q: "What is the largest bone in the body?",
        a1: "Femur",
        a2: "Spine",
        a3: "Arms",
        a4: "Skull",
        correct: "Femur"
    },

    { //5
        q: "The average human body contains how many pints of blood?",
        a1: "11",
        a2: "17",
        a3: "5",
        a4: "9",
        correct: "9"
    },

    { //6
        q: "Which planet is closet to the Sun?",
        a1: "Pluto",
        a2: "Mercury",
        a3: "Venus",
        a4: "Mars",
        correct: "Mercury"
    },

    { //7
        q: "Spinach is high in what mineral?",
        a1: "Iron",
        a2: "Calcium",
        a3: "Flouride",
        a4: "Sodium",
        correct: "Iron"
    },

    { //8
        q: "What is the capital of Spain?",
        a1: "Valencia",
        a2: "Madrid",
        a3: "Barcelona",
        a4: "London",
        correct: "Madrid"
    },

    { //9
        q: "What is the third zodiac sign?",
        a1: "Gemini",
        a2: "Aquarius",
        a3: "Virgo",
        a4: "Libra",
        correct: "Gemini"
    },

    { //10
        q: "What is the total number of dots on a pair of dice?",
        a1: "36",
        a2: "49",
        a3: "28",
        a4: "42",
        correct: "42"
    },

]

var questionIndex = 1;
// questions[questionIndex].q


//4 of these, 
function renderQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var questionContainer = $("<div>")
        questionContainer.addClass("questionContainer")
        var questionTitle = $("<div>")
        questionTitle.addClass("questionTitle")
        questionTitle.text(questions[i].q);
        questionContainer.append(questionTitle)

        //question 1 
        var answerOne = $("<input>")
        answerOne.attr("type", "radio")
        answerOne.attr("name", "question" + i)
        answerOne.val(questions[i].a1)
        questionContainer.append(answerOne)
        var answerOneText = $("<span>")
        answerOneText.text(questions[i].a1)
        questionContainer.append(answerOneText)

        //question 2
        var answerTwo = $("<input>")
        answerTwo.attr("type", "radio")
        answerTwo.attr("name", "question" + i)
        answerTwo.val(questions[i].a2)
        questionContainer.append(answerTwo)
        var answerTwoText = $("<span>")
        answerTwoText.text(questions[i].a2)
        questionContainer.append(answerTwoText)

        //question 3
        var answerThree = $("<input>")
        answerThree.attr("type", "radio")
        answerThree.attr("name", "question" + i)
        answerThree.val(questions[i].a3)
        questionContainer.append(answerThree)
        var answerThreeText = $("<span>")
        answerThreeText.text(questions[i].a3)
        questionContainer.append(answerThreeText)

        //question 4
        var answerFour = $("<input>")
        answerFour.attr("type", "radio")
        answerFour.attr("name", "question" + i)
        answerFour.val(questions[i].a4)
        questionContainer.append(answerFour)
        var answerFourText = $("<span>")
        answerFourText.text(questions[i].a4)
        questionContainer.append(answerFourText)

        $(".container").append(questionContainer)

    }
}
renderQuestions()

$("#submitQuiz").on("click", function(event) {
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var unanswered = 0;
    event.preventDefault();
    $(".container").hide();
    for (var i = 0; i < questions.length; i++) {
        console.log($('input[name=question' + i + ']:checked').val());
        if (questions[i].correct === $('input[name=question' + i + ']:checked').val()) {
            numberCorrect ++
        }
        else if ($('input[name=question' + i + ']:checked').val() === undefined){
            unanswered ++
        }
        else {
            numberIncorrect ++
        }
        console.log(numberIncorrect, numberCorrect, unanswered);
    };
});

// function answerCorrect() {
// 	correct++;
// 	alert("Correct!");
// 	console.log("correct");
// }

// function answerWrong() {
// 	wrong++;
// 	alert("Incorrect!");
// 	console.log("wrong");
// }

// function showScore() {
// 	$('.question').empty();
// 	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
// 	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
// 	countdownTimer.stop();
// 	$('.timer').empty();