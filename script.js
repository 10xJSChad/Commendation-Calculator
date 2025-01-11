function displayResult(commendationsNeeded) {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "You need " + commendationsNeeded + " commendations to reach Exalted.";
}

function displayError() {
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Invalid input.";
}

function calculate() {
    var pointsLeft = 84000;
    var repLevel = document.getElementById("repLevel").value;
    var repPoints = parseInt(document.getElementById("repPoints").value);
    var commendationRep = parseInt(document.getElementById("commendationRep").value);

    if (repLevel === "1") pointsLeft = 48000;
    if (repLevel === "2") pointsLeft = 45000;
    if (repLevel === "3") pointsLeft = 42000;
    if (repLevel === "4") pointsLeft = 39000;
    if (repLevel === "5") pointsLeft = 33000;
    if (repLevel === "6") pointsLeft = 21000;

    pointsLeft -= repPoints;
    var commendationsNeeded = Math.ceil(pointsLeft / commendationRep);

    if (isNaN(commendationsNeeded) || commendationsNeeded === Infinity) {
        displayError();
        return
    }

    displayResult(commendationsNeeded);
}