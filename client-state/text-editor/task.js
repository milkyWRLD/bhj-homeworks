// Получаем ссылку на элемент textarea
let editor = document.getElementById('editor');

// Проверяем, есть ли сохраненное значение в localStorage
if (localStorage.getItem('text')) {
    // Если есть, то восстанавливаем его
    editor.value = localStorage.getItem('text');
}

// Добавляем обработчик события на изменение содержимого textarea
editor.addEventListener('input', function() {
    // Сохраняем значение textarea в localStorage
    localStorage.setItem('text', editor.value);
});

// Создаем кнопку для очистки содержимого
let clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
document.body.appendChild(clearButton);

// Добавляем обработчик события на нажатие кнопки
clearButton.addEventListener('click', function() {
    // Очищаем содержимое textarea и localStorage
    editor.value = '';
    localStorage.removeItem('text');
});
