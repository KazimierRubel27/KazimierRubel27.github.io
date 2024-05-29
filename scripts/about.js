

let list = document.getElementById("memorylist");
let inputBox = document.getElementById("inputBox");

document.getElementById("addButton").addEventListener("click", function () {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    list.appendChild(li);
});

