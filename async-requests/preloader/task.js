document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    const apiUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

    function showLoader() {
        loader.classList.add('loader_active');
    }

    function hideLoader() {
        loader.classList.remove('loader_active');
    }

    function renderCurrencyItem(code, value) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <div class="item__code">${code}</div>
            <div class="item__value">${value}</div>
            <div class="item__currency">руб.</div>
        `;
        itemsContainer.appendChild(item);
    }

    function fetchData() {
        showLoader();

        const cachedData = localStorage.getItem('currencyData');
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            updateUI(parsedData);
            hideLoader();
        } else {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Кэширование данных в localStorage
                    localStorage.setItem('currencyData', JSON.stringify(data));
                    updateUI(data);
                })
                .catch(error => console.error('Error fetching data:', error))
                .finally(() => hideLoader());
        }
    }

    function updateUI(data) {
        itemsContainer.innerHTML = '';

        // Обновление UI с новыми данными
        for (const currencyCode in data.response.Valute) {
            const currency = data.response.Valute[currencyCode];
            renderCurrencyItem(currency.CharCode, currency.Value);
        }
    }

    fetchData();
});
