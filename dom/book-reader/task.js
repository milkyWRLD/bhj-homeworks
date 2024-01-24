document.querySelectorAll('.book__control').forEach(control => {
    control.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;
        let activeElement = control.querySelector('.font-size_active, .color_active');
        if (target.classList.contains('font-size')) {
            let book = document.getElementById('book');
            book.className = 'book';
            if (target.dataset.size) {
                book.classList.add(`book_fs-${target.dataset.size}`);
            }
            activeElement.classList.remove('font-size_active');
            target.classList.add('font-size_active');
        } else if (target.classList.contains('color')) {
            let book = document.getElementById('book');
            book.className = 'book';
            if (activeElement.classList.contains('text_color_black')) {
                book.classList.add('book_color-black');
            } else if (activeElement.classList.contains('text_color_gray')) {
                book.classList.add('book_color-gray');
            } else if (activeElement.classList.contains('text_color_whitesmoke')) {
                book.classList.add('book_color-whitesmoke');
            } else if (activeElement.classList.contains('bg_color_black')) {
                book.classList.add('book_bg-black');
            } else if (activeElement.classList.contains('bg_color_gray')) {
                book.classList.add('book_bg-gray');
            } else if (activeElement.classList.contains('bg_color_white')) {
                book.classList.add('book_bg-white');
            }
            activeElement.classList.remove('color_active');
            target.classList.add('color_active');
        }
    });
});
