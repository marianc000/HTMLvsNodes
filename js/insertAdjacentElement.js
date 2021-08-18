import { execute, root } from './shared.js';

function row(vals) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';
    vals.forEach(val => {
        const cell = document.createElement("div");
        cell.title = val;
        cell.appendChild(document.createTextNode(val));
        rowDiv.insertAdjacentElement('beforeend', cell);
    });
    return rowDiv;
}

function table(data) {
    return data.map(vals => row(vals));
}

function render(data) {
    table(data).forEach(div => root.insertAdjacentElement('beforeend', div))
}

export default function () {
    return execute('insertAdjacentElement', render);
}

