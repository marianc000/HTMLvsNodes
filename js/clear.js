export default function clear() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            root.innerHTML = '';
            setTimeout(() => {
                setTimeout(resolve, 50);
            });
        });
    });
}



