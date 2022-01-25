
// add question
let index = 0;
let newListOfListAnswers = []
function addQuestion() {
    let newList = {};
    let title = document.querySelector(".description").value;
    let questionInput = document.querySelector("#question").value;
    let firstA = document.querySelector("#answer1").value;
    let secondA = document.querySelector("#answer2").value;
    let thirdA = document.querySelector("#answer3").value;
    let fourthA = document.querySelector("#answer4").value;
    let score = document.querySelector(".score").value;

    if (questionInput !== "" && firstA !=="" && secondA !== "" && thirdA !== "" && fourthA !== "" && score != 0 && title !==""){
        newList.Question = questionInput;
        newList.Option1 = firstA;
        newList.Option2= secondA;
        newList.Option3 = thirdA;
        newList.Option4 = fourthA;
        newList.score = score;
        newListOfListAnswers.push(newList)
        displayQuestion(newListOfListAnswers)
    }else{
        document.querySelector(".message-container1").style.display = "block";
        document.querySelector(".message-container1").style.display = "flex";
        document.querySelector(".message-container2").style.display = "none";
    }

    document.getElementById("show").style.display = "block";
    index++;
}

let createButton = document.getElementById("create-btn");
createButton.addEventListener("click", addQuestion);

// display question
function displayQuestion(list){
    let newcardContainer = document.querySelector(".display-question");
    let allcards = document.querySelectorAll(".card");
    for (let car of allcards){
        car.parentNode.removeChild(car)
    }
    let title = document.querySelector(".description").value;
    document.getElementById("title").textContent = title;
    for (let question of list){
        // create div name card to contain question and answers
        let card = document.createElement("div");
        card.className = "card";
        newcardContainer.appendChild(card)
        
        // create h2 className questions and append to card
        let questions = document.createElement("h3");
        questions.className = "questions";
        questions.textContent = question.Question;
        
        let scoreEachQuestion = document.createElement("p");
        scoreEachQuestion.className = "myschore";
        scoreEachQuestion.textContent = question.score + " pts"
        card.appendChild(scoreEachQuestion)
        card.appendChild(questions);
        
        // create input type radio and append to card
        
        let form_gruop1 = document.createElement('div')
        form_gruop1.className = 'form-group';
        let form_gruop2 = document.createElement('div')
        form_gruop2.className = 'form-group';
        let form_gruop3 = document.createElement('div')
        form_gruop3.className = 'form-group';
        let form_gruop4 = document.createElement('div')
        form_gruop4.className = 'form-group';
        
        
        const answer1 = document.createElement('label')
        answer1.className = "eachAn"
        answer1.textContent = question.Option1;
        
        
        const answer2 = document.createElement('label')
        answer2.className = "eachAn"
        answer2.textContent = question.Option2;
        
        
        const answer3 = document.createElement('label')
        answer3.className = "eachAn"
        answer3.textContent = question.Option3;
        
        
        const answer4 = document.createElement('label')
        answer4.className = "eachAn"
        answer4.textContent = question.Option4;
        
        // card.appendChild(title)
        
        form_gruop1.appendChild(answer1)
        form_gruop2.appendChild(answer2)
        form_gruop3.appendChild(answer3)
        form_gruop4.appendChild(answer4)
        
        
        card.appendChild(form_gruop1)
        card.appendChild(form_gruop2)
        card.appendChild(form_gruop3)
        card.appendChild(form_gruop4)
        newcardContainer.appendChild(card); 
        // creat option to contain icon and trash
        let option = document.createElement("div");
        option.className = "option";
        // create icon and add to option 
        let icon = document.createElement("i");
        icon.className = "fa fa-pencil";
        icon.id = "edit";
        let trash = document.createElement("i");
        trash.className = "fa fa-trash-o";
        trash.id = "delete"
        option.appendChild(icon);
        option.appendChild(trash);
        card.appendChild(option);
    }
    document.querySelector(".message-container2").style.display = "block";
    document.querySelector(".message-container2").style.display = "flex";
    document.querySelector(".message-container1").style.display = "none";
}

function displayAllQuestion(){
    if (newListOfListAnswers.length>0){
        document.querySelector(".display-question").style.display = "block"
        document.querySelector(".description-card").style.display = "none"
        document.querySelector("form").style.display = "none";
        document.getElementById("play").style.display = "block";
        document.getElementById("show").style.display = "none";
    }else{
        document.querySelector(".message-container").style.display = "block";
        document.querySelector(".display-question").style.display = "block"
        document.querySelector(".description-card").style.display = "none"
        document.querySelector("form").style.display = "none";
        document.getElementById("play").style.display = "none";
        document.getElementById("show").style.display = "none";
    }
}
let show = document.getElementById("show");
show.addEventListener("click", displayAllQuestion)

// create quiz
function createQuiz(){
    document.querySelector(".description-card").style.display = "block"
    document.querySelector("form").style.display = "block";
    document.getElementById("play").style.display = "none";
    console.log("hello")
    document.getElementById("show").style.display = "block";
    document.querySelector(".message-container").style.display = "none";
    for (let q in newListOfListAnswers){
        newListOfListAnswers[q].remove();
    }
    document.getElementById("message").remove();
}
let createquiz = document.querySelector(".create");
createquiz.addEventListener("click", createQuiz)
document.getElementById("play").style.display = "none";

// delete message 
function deleteMessage(){
    let removeText = document.querySelectorAll("#rem");
    for (let i of removeText){
        i.style.display = "none"
    }
}
let del = document.querySelectorAll(".fa.fa-close");
for (let d of del){
    d.addEventListener("click", deleteMessage)
}
