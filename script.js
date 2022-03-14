const wrapper = document.querySelector('.wrapper');

let divs = [];
function clearGrid(size = 16) {
    let gridSize = size * size;

    divs.forEach(element => {
        wrapper.removeChild(wrapper.firstChild);
    });
    
    divs = [];

    for (let index = 0; index < gridSize; index++) {
        divs[index] = "div"+index;
        wrapper.append(document.createElement('div'));
    }
    
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

const hover = document.querySelector('.wrapper div');
hover.addEventListener('hover', function () {
    hover.setAttribute('class', 'hovered');
});
