const grid = document.querySelector('#container');
const resetBtn = document.getElementById('reset');
const gridSizeBtn = document.getElementById('grid-size');
let nInput = document.querySelector('.input');
const maxWidth = 500;


window.addEventListener("load", createDefaultGrid);


function createDefaultGrid() {
    /* createGrid(16); */
    createCells(16);
}

/* function createGrid(n) {
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
} */

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
        grid.addEventListener("mouseover", changeColor);
        let boxes = document.getElementsByClassName("box");
        for (k = 0; k < boxes.length; k++) {
            boxes[k].style.width = maxWidth / n + "px";
            boxes[k].style.height = maxWidth / n + "px";
        }
    }
}

function changeColor(e) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}

