import WORDS from "./words.js";

const TOTAL_GUESSES = 6;
let guesses = TOTAL_GUESSES;
let Guess = [];
let nextLetter = 0;
let Answer = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(Answer)

function initBoard() {
    let board = document.getElementsByClassName("game-board");
    for (let i = 0; i < TOTAL_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board[0].appendChild(row)
    }
}
initBoard()