const COL_COUNT = 20, ROW_COUNT = 5000;

export const root = document.getElementById("root");

function generateData() {
    const rows = [];
    for (let r = 0; r < ROW_COUNT; r++) {
        const row = [];
        rows.push(row);
        for (let c = 0; c < COL_COUNT; c++)
            row.push(`${c},${r}`);
    }
    return rows;
}

const data = generateData();

export const results = {};

function addResult(label, start, domDone, rendered) {
    results[label] = results[label] ?? [];
    results[label].push({ start, domDone, rendered });
}

export function execute(label, render) {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            const start = Date.now();
            render(data);
            const domDone = Date.now();
            setTimeout(() => {
                addResult(label, start, domDone, Date.now());
                setTimeout(resolve);
            });
        });
    });
}



export function clean() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            root.innerHTML = '';
            setTimeout(() => {
                setTimeout(resolve, 50);
            });
        });
    });
}



