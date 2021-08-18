// security.js
const root = document.getElementById("root");
root.innerHTML = `<img src=/ onerror='console.log("innerHTML")'>`;

root.insertAdjacentHTML('beforeend',
    `<img src=/ onerror='console.log("insertAdjacentHTML")'>`); 