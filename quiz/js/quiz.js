var questions = [
    "Okay, which original trilogy movie is your favorite?",
    "Which hero are you?",
    "Enter your age and together we'll rule the galaxy!",
    "What side are you on?",
    "What's your favorite quote?"
]
var pictures = [
    `<img src="./images/question1.jpg" width="60%">`,
    `<img src="./images/question2.jpg" width="67%">`,
    `<img src="./images/question3.jpeg" width="55%">`,
    `<img src="./images/question4.jpg" width="75%">`,
    `<img src="./images/question5.jpg" width ="85%">`
]
var answer_a = [
    "A New Hope",
    "Han Solo",
    "answer c1",
    "Light",
    "answer e1"
]
var answer_b = [
    "The Empire Strikes Back",
    "Luke Skywalker",
    "answer c2",
    "Dark",
    "answer e2"
]
var answer_c = [
    "Return of the Jedi",
    "Princess Leia",
    "answer c3",
    "answer d3",
    "answer e3"
]
var answer_d = [
    "All of them!",
    "R2D2",
    "answer c4",
    "answer d4",
    "answer e4"
]
var begin = function() {
    document.getElementById("begin_button").className = "hide";
    document.getElementById("question1").className = "question_box question1";
    submit_answer(0);
}

var submit_answer = function(question_number) {
    var question_num = question_number;
    document.getElementsByClassName("question")[0].innerHTML = questions[question_num];
    document.getElementsByClassName("picture")[0].innerHTML = pictures[question_num];
    document.getElementById("q1_label1").innerHTML = answer_a[question_num];
    document.getElementById("q1_label2").innerHTML = answer_b[question_num];
    document.getElementById("q1_label3").innerHTML = answer_c[question_num];
    document.getElementById("q1_label4").innerHTML = answer_d[question_num];
    if (question_num == 1) {
        document.getElementById("submit_1").className = "hide";
        document.getElementById("submit_2").className = "button_forward";
        document.getElementById("q1_answer1").type = "checkbox";
        document.getElementById("q1_answer2").type = "checkbox";
        document.getElementById("q1_answer3").type = "checkbox";
        document.getElementById("q1_answer4").type = "checkbox";
        document.getElementById("q1_answer1").checked = false;
        document.getElementById("q1_answer2").checked = false;
        document.getElementById("q1_answer3").checked = false;
        document.getElementById("q1_answer4").checked = false;
        document.getElementById("q1_answer1").setAttribute("onclick", "checkbox1();");
        document.getElementById("q1_answer2").setAttribute("onclick", "checkbox2();");
        document.getElementById("q1_answer3").setAttribute("onclick", "checkbox3();");
        document.getElementById("q1_answer4").setAttribute("onclick", "checkbox4();");
        document.getElementById("q1_answer1").name = "on";
        document.getElementById("q1_answer2").name = "on";
        document.getElementById("q1_answer3").name = "on";
        document.getElementById("q1_answer4").name = "on";
    } else if (question_num == 2) {
        document.getElementById("submit_2").className = "hide";
        document.getElementById("submit_3").className = "button_forward";
        document.getElementById("q1_answer1").type = "number";
        document.getElementById("q1_answer2").className = "hide";
        document.getElementById("q1_answer3").className = "hide";
        document.getElementById("q1_answer4").className = "hide";
        document.getElementById("q1_label1").className = "hide";
        document.getElementById("q1_label2").className = "hide";
        document.getElementById("q1_label3").className = "hide";
        document.getElementById("q1_label4").className = "hide";
        document.getElementById("q1_answer1").setAttribute("onclick", "age();");
    } else if (question_num == 3) {
        age();
        document.getElementById("submit_3").className = "hide";
        document.getElementById("submit_4").className = "button_forward";
        document.getElementById("q1_answer1").type = "range";
        document.getElementById("q1_answer1").min = "1";
        document.getElementById("q1_answer1").max = "4";
        document.getElementById("q1_answer1").name = "side";
        document.getElementById("q1_label1").className = "answer_a ans_short";
        document.getElementById("q1_label2").className = "answer_b ans_short";
    } else if (question_num == 4) {
        side();
        document.getElementById("submit_4").className = "hide";
        document.getElementById("submit_5").className = "button_forward";
        document.getElementById("q1_answer1").type = "text";
        document.getElementById("q1_answer1").value = "";
        document.getElementById("q1_answer1").style.width = "250px";
        document.getElementById("q1_answer1").placeholder = "I've got a bad feeling about this...";
        document.getElementById("q1_answer2").className = "hide";
        document.getElementById("q1_answer3").className = "hide";
        document.getElementById("q1_answer4").className = "hide";
        document.getElementById("q1_label1").className = "hide";
        document.getElementById("q1_label2").className = "hide";
        document.getElementById("q1_label3").className = "hide";
        document.getElementById("q1_label4").className = "hide";
        document.getElementById("q1_answer1").min = "";
        document.getElementById("q1_answer1").max = "";
    } else if (question_num == 5) {
        quote();
        finalScore();
        document.getElementById("question1").className = "hide";
        document.getElementById("final_result").className = "results";
    }
}

localStorage.clear();
localStorage.question1Answer = 0;
localStorage.question2Answer = 0;
localStorage.question3Answer = 0;
localStorage.question4Answer = 0;
localStorage.question5Answer = 0;
var points = 0;

var radio1 = function() {
    var toggle = document.getElementById("q1_answer1").name;
    if (toggle == "on") {
        document.getElementById("q1_answer1").checked = true;
        points = 1;
        document.getElementById("q1_answer1").name = "off";
        localStorage.setItem("question1Answer",points);
    } else {
        document.getElementById("q1_answer1").checked = false;
        points = 0;
        document.getElementById("q1_answer1").name = "on";
        localStorage.setItem("question1Answer",points);
    }
}
var radio2 = function() {
    var toggle = document.getElementById("q1_answer2").name;
    if (toggle == "on") {
        document.getElementById("q1_answer2").checked = true;
        points = 2;
        document.getElementById("q1_answer2").name = "off";
        localStorage.setItem("question1Answer",points);
    } else {
        document.getElementById("q1_answer2").checked = false;
        points = 0;
        document.getElementById("q1_answer2").name = "on";
        localStorage.setItem("question1Answer",points);
    }
}
var radio3 = function() {
    var toggle = document.getElementById("q1_answer3").name;
    if (toggle == "on") {
        document.getElementById("q1_answer3").checked = true;
        points = 3;
        document.getElementById("q1_answer3").name = "off";
        localStorage.setItem("question1Answer",points);
    } else {
        document.getElementById("q1_answer3").checked = false;
        points = 0;
        document.getElementById("q1_answer3").name = "on";
        localStorage.setItem("question1Answer",points);
    }
}
var radio4 = function() {
    var toggle = document.getElementById("q1_answer4").name;
    if (toggle == "on") {
        document.getElementById("q1_answer4").checked = true;
        points = 4;
        document.getElementById("q1_answer4").name = "off";
        localStorage.setItem("question1Answer",points);
    } else {
        document.getElementById("q1_answer4").checked = false;
        points = 0;
        document.getElementById("q1_answer4").name = "on";
        localStorage.setItem("question1Answer",points);
    }
}
var checkbox1 = function() {
    var toggle = document.getElementById("q1_answer1").name;
    if (toggle == "on") {
        document.getElementById("q1_answer1").checked = true;
        points = 1;
        document.getElementById("q1_answer1").name = "off";
        localStorage.setItem("question2Answer",points);
    } else {
        document.getElementById("q1_answer1").checked = false;
        points = 0;
        document.getElementById("q1_answer1").name = "on";
        localStorage.setItem("question2Answer",points);
    }
}
var checkbox2 = function() {
    var toggle = document.getElementById("q1_answer2").name;
    if (toggle == "on") {
        document.getElementById("q1_answer2").checked = true;
        points = 2;
        document.getElementById("q1_answer2").name = "off";
        localStorage.setItem("question2Answer",points);
    } else {
        document.getElementById("q1_answer2").checked = false;
        points = 0;
        document.getElementById("q1_answer2").name = "on";
        localStorage.setItem("question2Answer",points);
    }
}
var checkbox3 = function() {
    var toggle = document.getElementById("q1_answer3").name;
    if (toggle == "on") {
        document.getElementById("q1_answer3").checked = true;
        points = 3;
        document.getElementById("q1_answer3").name = "off";
        localStorage.setItem("question2Answer",points);
    } else {
        document.getElementById("q1_answer3").checked = false;
        points = 0;
        document.getElementById("q1_answer3").name = "on";
        localStorage.setItem("question2Answer",points);
    }
}
var checkbox4 = function() {
    var toggle = document.getElementById("q1_answer4").name;
    if (toggle == "on") {
        document.getElementById("q1_answer4").checked = true;
        points = 4;
        document.getElementById("q1_answer4").name = "off";
        localStorage.setItem("question2Answer",points);
    } else {
        document.getElementById("q1_answer4").checked = false;
        points = 0;
        document.getElementById("q1_answer4").name = "on";
        localStorage.setItem("question2Answer",points);
    }
}
var age = function() {
    if (document.getElementById("q1_answer1").name !== "side") {
        var userAge = document.getElementById("q1_answer1").value;
        localStorage.setItem("question3Answer",userAge);
    }
}
var side = function() {
    var userSide = document.getElementById("q1_answer1").value;
    localStorage.setItem("question4Answer",userSide);
}
var quote = function() {
    var userQuote = document.getElementById("q1_answer1").value;
    var userQuoteLength = userQuote.length;
    localStorage.setItem("question5Answer",userQuoteLength);
}
var finalScore = function() {
    var question3ans = JSON.parse(localStorage.getItem('question3Answer'));
    var question5ans = JSON.parse(localStorage.getItem('question5Answer'));
    if (question3ans < 20) {
        var question3score = 1;
    } else if (question3ans >= 20 && question3ans < 40) {
        var question3score = 2;
    } else if (question3ans >= 40 && question3ans < 60) {
        var question3score = 3;
    } else {
        var question3score = 4;
    }
    localStorage.setItem("question3Answer",question3score);
    if (question5ans < 10) {
        var question5score = 1;
    } else if (question5ans >= 10 && question5ans < 25) {
        var question5score = 2;
    } else if (question5ans >= 25 && question5ans < 40) {
        var question5score = 3;
    } else {
        var question5score = 4;
    }
    localStorage.setItem("question5Answer",question5score);
    var q1_score = JSON.parse(localStorage.getItem('question1Answer'));
    var q2_score = JSON.parse(localStorage.getItem('question2Answer'));
    var q3_score = JSON.parse(localStorage.getItem('question3Answer'));
    var q4_score = JSON.parse(localStorage.getItem('question4Answer'));
    var q5_score = JSON.parse(localStorage.getItem('question5Answer'));
    var userScore = q1_score + q2_score + q3_score + q4_score + q5_score;
    if (userScore < 6) {
        document.getElementById("final_result").innerHTML = `You are C3PO <br> <img src="./images/c3po.jpg" width="75%"></img>`;
    } else if (userScore === 6) {
        document.getElementById("final_result").innerHTML = `You are R2D2 <br> <img src="./images/r2d2.jpg" width="75%"></img>`;
    } else if (userScore === 7) {
        document.getElementById("final_result").innerHTML = `You are Chewbacca <br> <img src="./images/chewy.jpeg" width="75%"></img>`;
    } else if (userScore >=8 && userScore <= 9) {
        document.getElementById("final_result").innerHTML = `You are Luke Skywalker <br> <img src="./images/skywalker.jpg" width="75%"></img>`;
    } else if (userScore >=10 && userScore <= 11) {
        document.getElementById("final_result").innerHTML = `You are Princess Leia <br> <img src="./images/leia.jpg" width="70%"></img>`;
    } else if (userScore >=12 && userScore <= 13) {
        document.getElementById("final_result").innerHTML = `You are Han Solo <br> <img src="./images/han.jpg" width="75%"></img>`;
    } else if (userScore >=14 && userScore <= 15) {
        document.getElementById("final_result").innerHTML = `You are Obi-Wan Kenobi <br> <img src="./images/obi-wan.png" width="75%"></img>`;
    } else if (userScore === 16) {
        document.getElementById("final_result").innerHTML = `You are Yoda <br> <img src="./images/yoda.jpeg" width="75%"></img>`;
    } else if (userScore === 17) {
        document.getElementById("final_result").innerHTML = `You are Boba Fett <br> <img src="./images/boba.png" width="45%"></img>`;
    } else if (userScore >=18 && userScore <= 19) {
        document.getElementById("final_result").innerHTML = `You are Darth Vader <br> <img src="./images/darth_vader.jpg" width="60%"></img>`;
    } else {
        document.getElementById("final_result").innerHTML = `You are the Emporer <br> <img src="./images/emporer.png" width="75%"></img>`;
    }
}