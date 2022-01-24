// add question
let listOfQuestionAndAnswer= [
    { Question: 'How many studets of generation 2020-2022 ?', Option1: 70, Option2: 71, Option3: 69, Option4: 65,checked:false},
    { Question: 'When pnc was created ?', Option1: 2002, Option2: 2005, Option3: 2007, Option4: 2006,checked:true},
    { Question: 'How many countries that PN operating nowaday  ?', Option1: 3, Option2: 6, Option3: 9, Option4: 5,checked:false}
]



function addQuestion() {
    let newList = {};
    let questionInput = document.querySelector("#question").value;
    let firstA = document.querySelector("#answer1").value;
    let secondA = document.querySelector("#answer2").value;
    let thirdA = document.querySelector("#answer3").value;
    let fourthA = document.querySelector("#answer4").value;
    let correctAnswer = false;
    let allAnswers = document.getElementsByName('eachAnswer')
    for (let answer in allAnswers) {
        if (allAnswers[answer].checked == true) {
            correctAnswer= true;
        }
    }

    newList.Question = questionInput;
    newList.Option1 = firstA;
    newList.Option2 = secondA;
    newList.Option3 = thirdA;
    newList.Option4 = fourthA;
    newList.checked = correctAnswer;
    listOfQuestionAndAnswer.push(newList)
    
}

let createButton = document.getElementById("create-btn");
createButton.addEventListener("click", addQuestion);


 