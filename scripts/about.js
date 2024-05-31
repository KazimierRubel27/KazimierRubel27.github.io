

let list = document.getElementById("memorylist");
let inputBox = document.getElementById("inputBox");

document.getElementById("addButton").addEventListener("click", function () {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    if (inputBox.value.toLowerCase()) === "yellow hat"{
        let anchorLink = document.createElement("a");
        anchorLink.href = "yellow_hat.html";
        li.appendChild(anchorLink);
        list.appendChild(li);
    } else {
        list.appendChild(li);
    }
});