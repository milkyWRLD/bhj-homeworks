document.addEventListener('DOMContentLoaded', function () {
    let deadCounter = 0;
    let lostCounter = 0;

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    function handleClick(event) {
        const hole = event.target;

        if (hole.classList.contains('hole_has-mole')) {
            deadCounter++;
            document.getElementById('dead').textContent = deadCounter;

            // Убираем класс сразу после клика
            hole.classList.remove('hole_has-mole');
        } else {
            lostCounter++;
            document.getElementById('lost').textContent = lostCounter;
        }

        if (deadCounter === 10) {
            alert('Поздравляю! Вы победили!');
            resetGame();
        } else if (lostCounter === 5) {
            alert('Игра окончена. Вы проиграли.');
            resetGame();
        }
    }

    function resetGame() {
        deadCounter = 0;
        lostCounter = 0;
        document.getElementById('dead').textContent = deadCounter;
        document.getElementById('lost').textContent = lostCounter;
    }

    function showMole() {
        const randomIndex = Math.floor(Math.random() * 9) + 1;
        getHole(randomIndex).classList.add('hole_has-mole');

        setTimeout(() => {
            getHole(randomIndex).classList.remove('hole_has-mole');
        }, 1000);
    }

    setInterval(showMole, 3000);

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', handleClick);
    }
});
