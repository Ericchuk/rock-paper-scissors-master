let close = document.querySelector(".close");
let rulesBtn = document.querySelector(".rules");
let modal = document.querySelector(".modal");
let gameBoard = document.querySelector(".step1");

function closeRule(){
    if(modal.style.display === "none"){
        modal.style.display = "block";
        gameBoard.style.display = "none"
        // console.log("@@@")
    }else{
        modal.style.display = "none";
        gameBoard.style.display = "block"
        // console.log("@")
    }
}

close.addEventListener("click", closeRule);
rulesBtn.addEventListener("click", closeRule);

let arrayOfFingers = document.querySelectorAll(".imgContainer");
let bg = document.querySelector(".hands");
let textBox = document.querySelector(".includeText");
let picked = document.querySelectorAll(".picked");
console.log(arrayOfFingers);

// for(let i = 0; i < arrayOfFingers.length; i++){
//     console.log(arrayOfFingers[i])
//     function pick(){
//         if(arrayOfFingers[i].style.display == "block"){
//             arrayOfFingers[i].style.display = "none"
//         }
//     }
//     arrayOfFingers[i].addEventListener("click", pick)
// }
function pickPaper(){
    arrayOfFingers[0].classList.toggle("positionHand");
    arrayOfFingers[0].style.margin = "0px";
    arrayOfFingers[0].style.animation = "animation: moveBottom 1s ease-in;"
    arrayOfFingers[1].classList.toggle("displayNone");
    arrayOfFingers[2].classList.toggle("displayNone");
    bg.style.backgroundImage = "none";
    let circle = document.createElement("div");
    circle.className = "circle";
    // bg.appendChild(computerChoice);
    function time(){
        arrayOfFingers[0].style.top = "50px";
        circle.style.top = "50px";
        for(let i = 0; i < picked.length; i++){
            picked[i].style.display = "block";
        }
        
    }
    setTimeout(time, 3000);
    let computerChoice;
    function generateComputerChoice(){
        let random = Math.floor(Math.random() * arrayOfFingers.length);
        console.log(random);
        if(random === 0 ){
            let img = document.createElement("img");
            img.setAttribute("src", "images/icon-scissors.svg");
            img.classList.toggle("ifSameScissors");
            computerChoice = img;
        }
        else if(random === 2 ){
            let img = document.createElement("img");
            img.setAttribute("src", "images/icon-rock.svg");
            img.classList.toggle("ifSameRock");
            computerChoice = img;
        }
        else if(random === 1 ){
            let img = document.createElement("img");
            img.setAttribute("src", "images/icon-paper.svg");
            img.classList.toggle("ifSame");
            computerChoice = img;
            
            // arrayOfFingers[0].style.display = "block";
        }
        bg.appendChild(computerChoice);
        computerChoice.classList.toggle("circle");
}
    generateComputerChoice()
    // function result(){
    //     if{}
    // }
    // arrayOfFingers[2].classList.toggle("displayNone")
}
arrayOfFingers[0].addEventListener("click", pickPaper);

=======
let close = document.querySelector(".close");
let rulesBtn = document.querySelector(".rules");
let modal = document.querySelector(".modal");
let gameBoard = document.querySelector(".step1");

function closeRule(){
    if(modal.style.display === "none"){
        modal.style.display = "block";
        gameBoard.style.display = "none"
        // console.log("@@@")
    }else{
        modal.style.display = "none";
        gameBoard.style.display = "block"
        // console.log("@")
    }
}

close.addEventListener("click", closeRule);
rulesBtn.addEventListener("click", closeRule);

let arrayOfFingers = document.querySelectorAll(".imgContainer");
let bg = document.querySelector(".hands");
let textBox = document.querySelector(".includeText");
let picked = document.querySelectorAll(".picked");
console.log(arrayOfFingers);

// for(let i = 0; i < arrayOfFingers.length; i++){
//     console.log(arrayOfFingers[i])
//     function pick(){
//         if(arrayOfFingers[i].style.display == "block"){
//             arrayOfFingers[i].style.display = "none"
//         }
//     }
//     arrayOfFingers[i].addEventListener("click", pick)
// }
function pickPaper(){
    arrayOfFingers[0].classList.toggle("positionHand");
    arrayOfFingers[0].style.margin = "0px";
    arrayOfFingers[0].style.animation = "animation: moveBottom 1s ease-in;"
    arrayOfFingers[1].classList.toggle("displayNone");
    arrayOfFingers[2].classList.toggle("displayNone");
    bg.style.backgroundImage = "none";
    let circle = document.createElement("div");
    circle.className = "circle";
    // bg.appendChild(computerChoice);
    function time(){
        arrayOfFingers[0].style.top = "50px";
        circle.style.top = "50px";
        for(let i = 0; i < picked.length; i++){
            picked[i].style.display = "block";
        }
        
    }
    setTimeout(time, 3000);
    let computerChoice;
    function generateComputerChoice(){
        let random = Math.floor(Math.random() * arrayOfFingers.length);
        console.log(random);
        if(random === 0 ){
            computerChoice = arrayOfFingers[2];
            arrayOfFingers[2].style.display = "block";
        }
        else if(random === 2 ){
            computerChoice = arrayOfFingers[1];
            arrayOfFingers[1].style.display = "block";
        }
        else if(random === 1 ){
            computerChoice = arrayOfFingers[0];
            arrayOfFingers[0].style.display = "block";
        }
        bg.appendChild(computerChoice);
        computerChoice.classList.toggle("circle");
}
    generateComputerChoice()
    // arrayOfFingers[2].classList.toggle("displayNone")
}
arrayOfFingers[0].addEventListener("click", pickPaper);

// generateComputerChoice();