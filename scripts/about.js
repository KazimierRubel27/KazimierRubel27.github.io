

let list = document.getElementById("memorylist");
let inputBox = document.getElementById("inputBox");

document.getElementById("addButton").addEventListener("click", function () {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    if (inputBox.value.toLowerCase()) === "yellow hat"{
        list.appendChild(li + "link to the man in the yellow hat" + "yellow_hat.html");
    } else {
        list.appendChild(li);
    }
});