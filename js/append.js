import { execute, root } from './shared.js';

function row(vals) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';

    rowDiv.append(...vals.map(val => {
        const cell = document.createElement("div");
        cell.title = val;
        cell.append(val);
        return cell;
    }));
    return rowDiv;
}

function table(data) {
    return data.map(vals => row(vals));
}

function render(data) {
    root.append(...table(data));
}

export default function () {
    return execute('append', render);
}

