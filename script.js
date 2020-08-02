const container = document.querySelector('#outerDiv');

createGrids = size => {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.className = 'innerDiv';
            div.addEventListener('mouseover', () => div.style.backgroundColor = '#3bb0e6');
            container.appendChild(div);
        }
    }
}

clearGrid = () => {
    let innerDiv = document.querySelectorAll('.innerDiv');
    innerDiv.forEach(div => div.style.backgroundColor = 'rgba(255, 255, 255, 0.952)');
}

createGrids(16);

console.log(document.querySelectorAll('.innerDiv'));

const form = document.querySelector('#form');
form.onsubmit = (e) => {
    e.preventDefault();
    let size = form.dimensions.value;
    if (size <= 1) {
        alert("You must enter a number greater than 1")
        clearGrid();
    } else {
        let innerDiv = document.querySelectorAll('.innerDiv');
        innerDiv.forEach(child => child.remove());
        document.querySelector('#outerDiv').style.gridTemplateColumns = 'repeat(' + size + ', auto)';
        createGrids(size);
    }
    form.reset();
}