function addToConsole(message) {
    var consoleElement = document.getElementById("console");
    consoleElement.innerHTML += message + "<br>";
    consoleElement.scrollTop = consoleElement.scrollHeight;
}

function clearConsole() {
    document.getElementById("console").innerHTML = "";
}

