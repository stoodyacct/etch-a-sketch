const container = document.querySelector('#outerDiv');
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

createGrids = size => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.className = 'innerDiv';
            div.style.opacity = '0.5';
            container.appendChild(div);
        }
    }
    changeColours('rainbow');
}

clearGrid = () => {
    let innerDiv = document.querySelectorAll('.innerDiv');
    innerDiv.forEach(div => div.style.background = 'rgba(255, 255, 255, 0.952)');
}

changeColours = colour => {
    clearGrid();
    let innerDiv = document.querySelectorAll('.innerDiv');
    if (colour != 'rainbow') {
        innerDiv.forEach(div => div.addEventListener('mouseover', () => div.style.background = colour));
    } else {
        for (let i = 0; i < innerDiv.length; i++) {
            innerDiv[i].addEventListener('mouseover', () => innerDiv[i].style.background = colours[Math.floor(Math.random() * colours.length)]);
        }
    }
}

createGrids(30);
const form = document.querySelector('#form');
form.onsubmit = (e) => {
    e.preventDefault();
    let size = form.dimensions.value;
    if (size <= 1) {
        alert("You must enter a number greater than 1")
        clearGrid();
    } else {
        innerDiv = document.querySelectorAll('.innerDiv');
        innerDiv.forEach(child => child.remove());
        document.querySelector('#outerDiv').style.gridTemplateColumns = 'repeat(' + size + ', auto)';
        createGrids(size);
    }
    form.reset();
}