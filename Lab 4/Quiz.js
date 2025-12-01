var questions = [
    "What is the capital of haryana?",
    "How many days are there in February?",
    "What is full form of css?",
    "What is 5 * 5?",
    "Which is used to style web pages? (css/html/js)"
];

var answers = [
    "chandigarh",
    "28",
    "cascading style sheet",
    "25",
    "css"
];
var score = 0;
for (var i = 0; i < questions.length; i++) { 
    var userAnswer = prompt(questions[i]);
    if (userAnswer === null) {
        alert("Quiz stopped.");
        break;
    }
    userAnswer = userAnswer.toLowerCase().trim();
    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer is: " + answers[i]);
    }
}
alert("Your final score: " + score + " / " + questions.length);