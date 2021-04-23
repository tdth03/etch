const grid = document.querySelector('.container')
let n = '';
let area = '';


function gridSizeInput() {

}

function createGrid() {
    n = 16;
    area = Math.pow(n, 2);

    if ( n >= 100 ) {
        alert('Select A Number Less Than 100.');
    } else {
    for (let i = 0; i < area; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }
    }
}

createGrid();