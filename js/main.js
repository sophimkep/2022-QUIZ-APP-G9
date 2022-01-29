
//================================================== add question or create question =========================================================
let listOfQuestionAndAnswer = [];
function addQuestion() {
    let newList = {};
    let answer = {};
    let questionInput = document.querySelector("#question").value;
    let firstA = document.querySelector("#an1").value;
    let secondA = document.querySelector("#an2").value;
    let thirdA = document.querySelector("#an3").value;
    let fourthA = document.querySelector("#an4").value;
    let score = document.querySelector(".score").value;
    let correct = document.getElementById("correct-answer").value;

    if (questionInput !== "" && firstA !=="" && secondA !== "" && thirdA !== "" && fourthA !== "" && score != 0 ){
        newList.Question = questionInput;
        newList.Options = answer;
        answer.a = firstA;
        answer.b = secondA;
        answer.c = thirdA;
        answer.d = fourthA;
        newList.correctAnswer = correct;
        newList.score = score;
        listOfQuestionAndAnswer.push(newList)
        displayQuestion(listOfQuestionAndAnswer)
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Question added to the list',
            showConfirmButton: false,
            timer: 600
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! this form is not completed',
          })
        document.querySelector(".message-container").style.display = "none";
    }  
 
    document.getElementById("title").style.display = "block"
}
// ======================================================================== End ====================================================


// =======================================================================display question==========================================
function displayQuestion(list){
    let newcardContainer = document.querySelector(".display-question");
    let allcards = document.querySelectorAll(".card");
    for (let cards of allcards){
        cards.parentNode.removeChild(cards)
    }
    let numberQ = 1
    let title = document.querySelector(".description").value;
    document.getElementById("title").textContent = title;
    for (let question in list){
     
        // create div name card to contain question and answers
        let card = document.createElement("div");
        card.className = "card";
        newcardContainer.appendChild(card)
        
        // create h2 className questions and append to card
        let questions = document.createElement("h2");
        questions.className = "questions";
        questions.textContent ='Question : '+ numberQ +'. ' + listOfQuestionAndAnswer[question].Question;
        
        // get score from array 
        let scoreEachQuestion = document.createElement("p");
        scoreEachQuestion.className = "myscore";
        scoreEachQuestion.textContent = listOfQuestionAndAnswer[question].score + " pts"
        card.appendChild(scoreEachQuestion)
        card.appendChild(questions);
        
        // create label to store each answer
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

        answer1.textContent = "a .  " + listOfQuestionAndAnswer[question].Options.a;
        
        
        const answer2 = document.createElement('label')
        answer2.className = "eachAn"
        answer2.textContent = "b .  " + listOfQuestionAndAnswer[question].Options.b;
        
        
        const answer3 = document.createElement('label')
        answer3.className = "eachAn"
        answer3.textContent = "c .  " + listOfQuestionAndAnswer[question].Options.c;

        const answer4 = document.createElement('label')
        answer4.className = "eachAn"
        answer4.textContent = "d .  " + listOfQuestionAndAnswer[question].Options.d;
        
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
        trash.id = indexRemove;
        trash.addEventListener('click',remove)
        option.appendChild(icon);
        option.appendChild(trash);
        card.appendChild(option);
        numberQ++
    }
}
// ================================================================= End =====================================================

// =============================================================show or display all question==================================
function displayAllQuestion(){
    if (listOfQuestionAndAnswer.length>0){
        document.querySelector('.container-banner').style.display = 'none'
        document.querySelector(".description-card").style.display = "none";
        document.querySelector("form").style.display = "none";
        document.getElementById("add").style.display = "block";
        document.getElementById("show").style.display = "none";
    }else{
        Swal.fire('No question in list for now !!')
    }
}
let show = document.querySelector("#show");
show.addEventListener("click", displayAllQuestion)
// ===================================================================== End ===================================================


// =============================================================Display game to play ===========================================
function displayQuizToPlay() {
    
    document.getElementById("add").style.display = "none";
    let title = document.querySelector(".description").value;
    document.getElementById("header").textContent = title;

    document.querySelector(".form-card").style.display = "none";
    document.querySelector(".description-card").style.display = "none";
    document.querySelector(".display-question").style.display = "none";
    document.querySelector("#show").style.display = "none";

    let quizCardcontainer = document.querySelector(".quiz-container");
    let quizcard = document.querySelectorAll(".quiz-card");
    for (let card of quizcard){
        card.parentNode.removeChild(card)
    }
    for (let i in listOfQuestionAndAnswer){
        let quizCard = document.createElement("div");
        quizCard.className = "quiz-card";
        let questionPlace = document.createElement("h2");
        questionPlace.id = "question"
        
        let answers  = document.createElement("div");
        answers.className = "allAnswers"
        
        let firstAnswer = document.createElement("button");
        firstAnswer.id = "a";
        let secondAnswer = document.createElement("button");
        secondAnswer.id = "b";
        let thirdAnswer = document.createElement("button");
        thirdAnswer.id = "c";4
        let fourthAnswer = document.createElement("button");
        fourthAnswer.id = "d";
        
        questionPlace.textContent = listOfQuestionAndAnswer[i].Question
        firstAnswer.textContent = listOfQuestionAndAnswer[i].Options.a;
        secondAnswer.textContent = listOfQuestionAndAnswer[i].Options.b
        thirdAnswer.textContent = listOfQuestionAndAnswer[i].Options.c
        fourthAnswer.textContent = listOfQuestionAndAnswer[i].Options.d
        
        answers.appendChild(firstAnswer);
        answers.appendChild(secondAnswer);
        answers.appendChild(thirdAnswer);
        answers.appendChild(fourthAnswer);
        

        quizCard.appendChild(questionPlace)
        quizCard.appendChild(answers)
        quizCardcontainer.appendChild(quizCard)
    }
}

function playQuiz() {
    if (listOfQuestionAndAnswer.length > 0) {
        displayQuizToPlay()
        document.querySelector(".quiz-container").style.display = 'block'
    }else {
        Swal.fire('No question in list for now !!')   
    }
}
let playButton = document.getElementById("play-quiz");
playButton.addEventListener("click", playQuiz);
// ======================================================================== End =========================================



// hide banner
function hideBanner(){
    let userName = document.querySelector('#username').value;
    if(userName!==''){
        document.querySelector('.container-banner').style.display = 'none'
        document.querySelector(".container").style.display = "block";
        document.querySelector(".form-card").style.display = "block";
        document.querySelector(".description-card").style.display = "block";
        document.querySelector(".display-question").style.display = "block";
        document.querySelector("#show").style.display = "block";
        document.querySelector(".quiz-container").style.display = "none"
    }else{
        window.confirm("Don't forget to input your name !")
    }
}
// btn create question
let createButton = document.getElementById("create-btn");
createButton.addEventListener("click", addQuestion);
// btn create quiz on menu
let createQuiz = document.getElementById("edit-Quiz");
createQuiz.addEventListener("click", hideBanner);

//remove
let indexRemove = 0;
//number of question 



//remove question=========================ne
function remove(event){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          let btnRemove = event.target;
          console.log(btnRemove)
          btnRemove.parentElement.parentElement.remove();
          let btnId = btnRemove.id;
          listOfQuestionAndAnswer.splice(btnId,1)
          if(listOfQuestionAndAnswer == 0) {
              document.getElementById("title").style.display = "none"
          }else {
            document.getElementById("title").style.display = "block"
          }
        }
    })
}
// ===========================================================ne



// acitve when clicking=======================phim

let active1 = document.querySelector("#play-quiz");
function act(){
    if (listOfQuestionAndAnswer.length > 0) {

        document.querySelector(".active1").style.background = "#90caf9"
        document.querySelector(".active1").style.color = "white"
        document.querySelector(".active2").style.background = "white"
        document.querySelector(".active2").style.color = "#1565c0"
    }
}
active1.addEventListener("click", act)

let active2 = document.querySelector("#edit-Quiz");
function active(){
    document.querySelector(".active2").style.background = "#90caf9"
    document.querySelector(".active2").style.color = "white"
    document.querySelector(".active1").style.background = "white"
    document.querySelector(".active1").style.color = "#1565c0"
}
active2.addEventListener("click", active);
// =====================================================phim

