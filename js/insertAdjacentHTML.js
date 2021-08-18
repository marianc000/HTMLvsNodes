import { execute, root } from './shared.js';

function row(vals) {
    return '<div class="row">'
        + vals.map(val => `<div title="${val}">${val}</div>`).join('')
        + '</div>';
}

function table(data) {
    return data.map(vals => row(vals)).join('');
}

function render(data) {
    root.insertAdjacentHTML('beforeend', table(data));
}

export default function () {
    return execute('insertAdjacentHTML', render);
}


