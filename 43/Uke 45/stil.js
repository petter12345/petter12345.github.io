function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    if (question1 == "mensenelva til Bekkaivk") {
        correct++;
    }
    if (question2 == "Oslo") {
        correct++;
    }
    if (question3 == "Stockholm") {
        correct++;
    }

    var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}

