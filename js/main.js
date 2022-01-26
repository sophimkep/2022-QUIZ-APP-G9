let newListOfListAnswers = [];
function addQuestion() {
    let newList = {};
    let answer = {};
    let title = document.querySelector(".description").value;
    let questionInput = document.querySelector("#question").value;
    let firstA = document.querySelector("#answer1").value;
    let secondA = document.querySelector("#answer2").value;
    let thirdA = document.querySelector("#answer3").value;
    let fourthA = document.querySelector("#answer4").value;
    let score = document.querySelector(".score").value;

    if (questionInput !== "" && firstA !=="" && secondA !== "" && thirdA !== "" && fourthA !== "" && score != 0 && title !==""){
        newList.Question = questionInput;
        newList.answers = answer;
        answer.a = firstA;
        answer.b = secondA;
        answer.c = thirdA;
        answer.d = fourthA;
        newList.correctAnswer = "b";
        newList.score = score;
        newListOfListAnswers.push(newList)
        displayQuestion(newListOfListAnswers)
    }
}
let createButton = document.getElementById("create-btn");
createButton.addEventListener("click", addQuestion);
