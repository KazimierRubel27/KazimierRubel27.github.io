function addToList() {
  var input = document.getElementById("inputBox").value;
  if (input.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = input;
    document.getElementById("answerList").appendChild(listItem);
    document.getElementById("inputBox").value = "";
  }else {
      ("Please enter a valid answer.");
    }
  }