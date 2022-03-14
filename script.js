const wrapper = document.querySelector('.wrapper');

let divs = [];
function clearGrid(size = 16) {
    let gridSize = size * size;
    const wrapperWidth = 1000;

    divs.forEach(element => {
        wrapper.removeChild(wrapper.firstChild);
    });
    
    divs = [];

    for (let index = 0; index < gridSize; index++) {
        divs[index] = "div"+index;
        let width = wrapperWidth / size;
        console.log(width);
        let newDiv = document.createElement('div');
        newDiv.setAttribute('style', "width: "+width+"px; height:"+width+"px;");
        wrapper.append(newDiv);
    }
    
    let onHover = document.querySelectorAll('.wrapper div');
    onHover.forEach(element => {
        element.addEventListener('mouseover',() => {
            element.setAttribute('class', 'hovered');
        });
    });

    console.log(divs);
}clearGrid();

// clear listen
const clear = document.querySelector('button').addEventListener('click', function () {
    let size = prompt("Please enter the grid size, ie 8 for an 8X8 grid. Max 16X16, even numbers only above 3");
    if (size > 16) {
        size = prompt("Please enter a number < than 16");
    }if (size < 4) {
        size = prompt("Please enter a number > 3");
    }if (size % 2 != 0) {
        size = prompt("Please enter an even number!");
    }if (size == 0) {
        return;
    }
    console.log(size);
    clearGrid(size);
})