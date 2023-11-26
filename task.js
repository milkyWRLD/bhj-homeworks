document.addEventListener("DOMContentLoaded", function() {
    var timerElement = document.getElementById("timer");
    var seconds = parseInt(timerElement.textContent);

    var countdown = setInterval(function() {
        seconds--;

        if (seconds <= 0) {
            clearInterval(countdown);
            alert("Вы победили в конкурсе!");
        }

        timerElement.textContent = seconds;
            var hours = Math.floor(seconds / 3600);
            var minutes = Math.floor((seconds % 3600) / 60);
            var secondsRemaining = seconds % 60;
            timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
    }, 1000);
});
