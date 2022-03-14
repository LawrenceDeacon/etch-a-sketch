const wrapper = document.querySelector('.wrapper');

let divs = [];
for (let index = 0; index < 256; index++) {
    divs[index] = "div"+index;
}

divs.forEach(element => {
    wrapper.append(document.createElement('div'));
});

console.log(divs);