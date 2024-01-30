document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('#book');
    const fontSize = document.querySelectorAll('.font-size');
    const color = document.querySelectorAll('.color');

    for(let i = 0; i < fontSize.length; i++) {
        fontSize[i].addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('.font-size_active').classList.remove('font-size_active');
            fontSize[i].classList.add('font-size_active');
            book.className = book.className.split(' ').filter(c => !c.startsWith('book_fs')).join(' ');
            if(fontSize[i].dataset.size) {
                book.classList.add(`book_fs-${fontSize[i].dataset.size}`);
            }
        });
    }

    for(let i = 0; i < color.length; i++) {
        color[i].addEventListener('click', function(event) {
            event.preventDefault();
            let activeColor = document.querySelector(`.${color[i].classList[1]}_active`);
            if(activeColor) {
                activeColor.classList.remove(`${color[i].classList[1]}_active`);
            }
            color[i].classList.add(`${color[i].classList[1]}_active`);
            if(color[i].dataset.textColor) {
                book.className = book.className.split(' ').filter(c => !c.startsWith('book_color')).join(' ');
                book.classList.add(`book_color-${color[i].dataset.textColor}`);
            }
            if(color[i].dataset.bgColor) {
                book.className = book.className.split(' ').filter(c => !c.startsWith('book_bg')).join(' ');
                book.classList.add(`book_bg-${color[i].dataset.bgColor}`);
            }
        });
    }
});
