import innerHTML from './innerHTML.js';
import insertAdjacentHTML from './insertAdjacentHTML.js';
import insertAdjacentElement from './insertAdjacentElement.js';
import appendChild from './appendChild.js';
import append from './append.js';
import prepend from './prepend.js';
import replaceChildren from './replaceChildren.js';
import showResults from './results.js';
import clear from './clear.js';

function run() {
    const times = 20;
    let p = Promise.resolve().then(clear); // needed to chain measurements
  
    for (let i = 0; i < times; i++) {
        p = p.then(appendChild).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(append).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(insertAdjacentElement).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(prepend).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(replaceChildren).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(innerHTML).then(clear);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(insertAdjacentHTML).then(clear);
    }

    p.then(showResults);
}

document.querySelector('button').onclick = run;

