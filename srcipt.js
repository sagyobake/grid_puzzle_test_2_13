'use strict';
const game = document.getElementById('game');

const gridGenerator = (element_name, width, height) => {
    const element = document.getElementById(element_name);
    let colums = '';
    let row = '';

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', `${element_name}_child`);
        div.style.border = '1px solid';
        element.appendChild(div);
        if (i < width) {
            colums += ' 1fr';
        }
        if (i < height) {
            row += ' 1fr';
        }
    }
    console.log(colums);
    console.log(row);

    element.style.display = 'grid';
    element.style.gridTemplateColumns = colums;
    element.style.gridRow = row;
}


const game_block = gridGenerator('game_block', 6, 6);


