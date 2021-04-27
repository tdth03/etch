const grid = document.querySelector('#container');
const resetBtn = document.getElementById('reset');
const defaultBtn = document.getElementById('default-button');
const gridSizeBtn = document.getElementById('grid-size');
const colorChangeBtn = document.querySelector('#color');
const gridSizeInput = document.querySelector('.input');
let changeText = document.querySelector("#color");
const maxWidth = 500;


/*Event Listeners for creating the default grid on page load, reset the board to all white background on reset button click, change color on color change click, change grid size on grid size button click,
and change grid size on Enter key usage within grid size input field. */
window.addEventListener("load", createDefaultGrid);
resetBtn.addEventListener("click", resetBoard);
defaultBtn.addEventListener("click", resetDefaultSize);
colorChangeBtn.addEventListener("click", changeColor);
eraserBtn.addEventListener("click", whiteColor);
gridSizeBtn.addEventListener("click", changeGrid);
gridSizeInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        gridSizeBtn.click();
    }
});


/* Creates Default 16X16 grid, with a mouseover trail color of Black*/
function createDefaultGrid() {
    createCells(16);
    grid.addEventListener("mouseover", blackColor);
}

/*Creates the actual cells based on input 'n'. First loop creates n row divs. For each row, the second loop creates n box divs and appends them to that row, continuing when all n rows have n boxes each.
The size of the boxes is applied by dividing n into the constant maxWidth of 500, defined above, adding the pixel unit. */

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

/*Take value of input field, store it in a variable, and run createCells function from above to create a new grid based on user input. */
function changeGrid() {
    newGridSize = gridSizeInput.value;
    if (newGridSize > 50) {
        alert ("Please Pick a Number 50 or Below");
    } else {
        while (grid.lastElementChild) {
            grid.removeChild(grid.lastElementChild);
        } createCells(newGridSize);
    }
}

/*Generates 3 random numbers to append to an rbg value to create a random color, take that random color, and set it as the background color for the target.*/
function randomColor(e) {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
}

/*Sets the target background color to Black*/
function blackColor(e) {
    e.target.style.backgroundColor = "black";
}

/*Sets the target background color to White*/
function whiteColor(e) {
    e.target.style.backgroundColor = "#ffffff";
}

/*Changes the inner text of the Color Selector Button depending on the current inner text. Adds the event listener for randomColor in order to switch the mouseover trail between colors.*/
function changeColor() {
    if (changeText.innerText === "Random Colors") {
    changeText.innerText = "Black";
    grid.addEventListener("mouseover", randomColor);
    } else {
        changeText.innerText = "Random Colors";
        grid.removeEventListener("mouseover", randomColor);
        grid.addEventListener("mouseover", blackColor);
}
}

/*Changes inner text of Color Selecton Button back to default "Random". Removes the random color event listener and adds the black color even listener. 
Changes the background color for all boxes back to default white. */
function resetBoard() {
    changeText.innerText = "Random Colors";
    grid.removeEventListener("mouseover", randomColor);
    grid.addEventListener("mouseover", blackColor);
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}


/*Resets the board to the default 16x16 grid. Alerts user if the board is already the default size. */
function resetDefaultSize() {
    boxes = document.getElementsByClassName('box');
    if (boxes.length === 256) {
        alert("It's already the default size, idiot.")
    } else {
        while (grid.lastElementChild) {
            grid.removeChild(grid.lastElementChild);
        } createCells(16);
    } 
}