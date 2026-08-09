let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");


let count = 0;
let text;

function game(input) {

    function reset(){
        box1.innerHTML = "";
        box2.innerHTML = "";
        box3.innerHTML = "";
        box4.innerHTML = "";
        box5.innerHTML = "";
        box6.innerHTML = "";
        box7.innerHTML = "";
        box8.innerHTML = "";
        box9.innerHTML = "";
        count = 0
    }

    
    if (count % 2 === 0) {
        text = "O"
    } else {
        text = "X"
    }


    if (box1.innerHTML === "" && input === "box1") {
        box1.innerHTML = text
        count++
    }
    else if (box2.innerHTML === "" && input === "box2") {
        box2.innerHTML = text
        count++
    }
    else if (box3.innerHTML === "" && input === "box3") {
        box3.innerHTML = text
        count++
    }
    else if (box4.innerHTML === "" && input === "box4") {
        box4.innerHTML = text
        count++
    }
    else if (box5.innerHTML === "" && input === "box5") {
        box5.innerHTML = text
        count++
    }
    else if (box6.innerHTML === "" && input === "box6") {
        box6.innerHTML = text
        count++
    }
    else if (box7.innerHTML === "" && input === "box7") {
        box7.innerHTML = text
        count++
    }
    else if (box8.innerHTML === "" && input === "box8") {
        box8.innerHTML = text
        count++
    }
    else if (box9.innerHTML === "" && input === "box9") {
        box9.innerHTML = text
        count++
    }

    // winning-condition for O user

    if (box1.innerHTML === "O" &&
        box2.innerHTML === "O" &&
        box3.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box4.innerHTML === "O" &&
        box5.innerHTML === "O" &&
        box6.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box7.innerHTML === "O" &&
        box8.innerHTML === "O" &&
        box9.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box1.innerHTML === "O" &&
        box4.innerHTML === "O" &&
        box7.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box2.innerHTML === "O" &&
        box5.innerHTML === "O" &&
        box8.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box3.innerHTML === "O" &&
        box6.innerHTML === "O" &&
        box9.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box1.innerHTML === "O" &&
        box5.innerHTML === "O" &&
        box9.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }
    else if (box3.innerHTML === "O" &&
        box5.innerHTML === "O" &&
        box7.innerHTML === "O"
    ) {
        alert("O user win")
        reset()
    }

    // Winning-condition for X user

    if (box1.innerHTML === "X" &&
        box2.innerHTML === "X" &&
        box3.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box4.innerHTML === "X" &&
        box5.innerHTML === "X" &&
        box6.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box7.innerHTML === "X" &&
        box8.innerHTML === "X" &&
        box9.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box1.innerHTML === "X" &&
        box4.innerHTML === "X" &&
        box7.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box2.innerHTML === "X" &&
        box5.innerHTML === "X" &&
        box8.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box3.innerHTML === "X" &&
        box6.innerHTML === "X" &&
        box9.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box1.innerHTML === "X" &&
        box5.innerHTML === "X" &&
        box9.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    else if (box3.innerHTML === "X" &&
        box5.innerHTML === "X" &&
        box7.innerHTML === "X"
    ) {
        alert("X user win")
        reset()
    }
    console.log(count);
    if (count === 9) {
        alert("Game Draw \n Restart")
        reset();
        }
}