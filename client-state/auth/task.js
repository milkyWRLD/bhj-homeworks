let form = document.getElementById('signin__form');
let signin = document.getElementById('signin');
let welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');


if (localStorage.getItem('user_id')) {
    userId.textContent = localStorage.getItem('user_id');
    welcome.classList.add('welcome_active');
} else {
    signin.classList.add('signin_active');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(form);

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Если авторизация успешна, сохраняем user_id в localStorage
                localStorage.setItem('user_id', data.user_id);
                userId.textContent = data.user_id;
                welcome.classList.add('welcome_active');
                signin.classList.remove('signin_active');
            } else {
                // Если авторизация не удалась, выводим сообщение
                alert('Неверный логин/пароль');
            }
            // Очищаем поля формы
            form.reset();
        });
});

let logoutButton = document.createElement('button');
logoutButton.textContent = 'Выйти';
document.body.appendChild(logoutButton);

logoutButton.addEventListener('click', function() {
    // Очищаем localStorage и скрываем блок welcome
    localStorage.removeItem('user_id');
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
});

