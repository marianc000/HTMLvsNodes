import { execute, root } from './shared.js';

function row(vals) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';

    rowDiv.replaceChildren(...vals.map(val => {
        const cell = document.createElement("div");
        cell.title = val;
        cell.replaceChildren(val);
        return cell;
    }));
    return rowDiv;
}

function table(data) {
    return data.map(vals => row(vals));
}

function render(data) {
    root.replaceChildren(...table(data));
}

export default function () {
    return execute('replaceChildren', render);
}

