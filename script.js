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