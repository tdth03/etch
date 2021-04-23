const grid = document.querySelector('#container');
const resetBtn = document.getElementById('reset');
const gridSizeBtn = document.getElementById('grid-size');
const colorChangeBtn = document.querySelector('#color');
let nInput = document.querySelector('.input');
const maxWidth = 500;



window.addEventListener("load", createDefaultGrid);
resetBtn.addEventListener("click", resetBoard);
colorChangeBtn.addEventListener("click", changeColor);


function createDefaultGrid() {
    createCells(16);
    grid.addEventListener("mouseover", blackColor);
}

function createCells(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < n; j++) {
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }
        grid.appendChild(row);
        let boxes = document.getElementsByClassName("box");
        for (k = 0; k < boxes.length; k++) {
            boxes[k].style.width = maxWidth / n + "px";
            boxes[k].style.height = maxWidth / n + "px";
        }
    }
}

function randomColor(e) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}

function blackColor(e) {
    e.target.style.backgroundColor = "black";
}

function changeColor(e) {
    let changeText = document.querySelector("#color");
    if (changeText.innerText === "Random") {
    changeText.innerText = "Black";
    grid.addEventListener("mouseover", randomColor);
    } else changeText.innerText = "Random";
    grid.addEventListener("mouseover", blackColor);
}

function resetBoard() {
    console.log("n");
    grid.addEventListener("mouseover", blackColor);
}

