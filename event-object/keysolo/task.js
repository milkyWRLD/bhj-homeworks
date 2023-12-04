class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word'); 
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.сountdown = container.querySelector('.status__timer');
        this.characters = container.querySelectorAll('.symbol');

        this.reset();

        this.registerEvents();
    }

    reset() {
        this.setNewWord();
        this.timer();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        let updatePlayer = ((event) => {
            if (event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
            } else {
                this.fail();
            }
        })
        document.addEventListener('keydown', updatePlayer);
    }

    timer() { // работа таймера
        let timerId = setInterval(() => {
            if (this.сountdown.textContent > 0){
                --this.сountdown.textContent;
            } else {
                clearInterval(timerId);
                return this.reset();
            }
        }, 1000);
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }

    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
    }

    getWord() {
        const words = [
                'bob',
                'awesome',
                'netology',
                'hello',
                'kitty',
                'rock',
                'youtube',
                'popcorn',
                'cinema',
                'love',
                'javascript'
            ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                    `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
            )
            .join('');

        this.wordElement.innerHTML = html;
        this.сountdown.textContent = word.length;
        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
}

new Game(document.getElementById('game'))
