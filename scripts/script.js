


let nbAttempts = 0;
let nbSuccess = 0;
let pi = 0;

window.addEventListener("DOMContentLoaded",init)


// This function simulates the attempts to find a point in the circle
function newAttempts() {
    let x= Math.random();
    let y= Math.random();
    return Math.pow(x, 2) + Math.pow(y, 2) <= 1;
}

// This function will be called every second
function clock() {


    let newAttempt = newAttempts()
    if (newAttempt === true) {
        nbSuccess++;
    }
    nbAttempts++;

    pi = 4.0 * nbSuccess / nbAttempts;

    displayValue()
}


function displayValue() {
    document.getElementById("nbSuccess").innerHTML = nbSuccess + "";
    document.getElementById("nbAttempt").innerHTML = nbAttempts + "";
    document.getElementById("piApproximation").innerHTML = pi.toFixed(10);
}







function init() {

    let interval = window.setInterval(clock, 10);

}