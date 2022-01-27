let active1 = document.querySelector("#play-quiz");
function act(){
    document.querySelector(".active1").style.background = "#90caf9"
    document.querySelector(".active1").style.color = "white"
    document.querySelector(".active2").style.background = "cornsilk"
    document.querySelector(".active2").style.color = "#1565c0"
}
active1.addEventListener("click", act)

let active2 = document.querySelector("#edit-Quiz");
function active(){
    document.querySelector(".active2").style.background = "#90caf9"
    document.querySelector(".active2").style.color = "white"
    document.querySelector(".active1").style.background = "cornsilk"
    document.querySelector(".active1").style.color = "#1565c0"
}
active2.addEventListener("click", active);

