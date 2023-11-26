document.addEventListener("DOMContentLoaded", function() {
    var clickCounterElement = document.getElementById("clicker__counter");
    var cookieElement = document.getElementById("cookie");
    var clickCounter = 0;
    var lastClickTime = Date.now();

    cookieElement.onclick = function() {
        clickCounter++;
        clickCounterElement.textContent = clickCounter;

        var currentTime = Date.now();
        var elapsedTime = (currentTime - lastClickTime) / 1000;
        var clickSpeed = 1 / elapsedTime;
        lastClickTime = currentTime;

        var speedElement = document.getElementById("clicker__speed");
        speedElement.textContent = clickSpeed.toFixed(2);

        var currentWidth = parseInt(cookieElement.width);
        var newWidth = currentWidth === 200 ? 180 : 200;

        cookieElement.width = newWidth;
        cookieElement.height = newWidth;
    };
});
