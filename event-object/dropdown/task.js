document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        valueElement.addEventListener('click', function () {
            listElement.classList.toggle('dropdown__list_active');
        });

        listElement.addEventListener('click', function (event) {
            if (event.target.classList.contains('dropdown__link')) {
                event.preventDefault();

                valueElement.textContent = event.target.textContent;

                listElement.classList.remove('dropdown__list_active');
            }
        });
    });
});
