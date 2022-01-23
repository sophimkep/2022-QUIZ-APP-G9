// add question
function addQuestion() {
    let questionInput = document.querySelector("#question").value;
    let firstA = document.querySelector("#answer1").value;
    let secondA = document.querySelector("#answer2").value;
    let thirdA = document.querySelector("#answer3").value;
    let fourthA = document.querySelector("#answer4").value;

   

    listOfQuestion.push(questionInput);

    let listOfAnswer = [];
    listOfAnswer.push(firstA)
    listOfAnswer.push(secondA)
    listOfAnswer.push(thirdA)
    listOfAnswer.push(fourthA)
    listOfListAnswer.push(listOfAnswer)
    console.log(listOfQuestion)
    console.log(listOfListAnswer)
    
    
}
let listOfListAnswer = []
let listOfQuestion = [];


let createButton = document.getElementById("create-btn");
createButton.addEventListener("click", addQuestion);

let createQ = document.getElementById("create");
createQ.addEventListener("click", addQuestion);
 