document.addEventListener('DOMContentLoaded', function () {
    let tabNavigations = document.querySelectorAll('.tab__navigation');

    tabNavigations.forEach(function (tabNavigation) {
        let tabs = tabNavigation.querySelectorAll('.tab');

        tabs.forEach(function (tab, tabIndex) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) {
                    t.classList.remove('tab_active');
                });

                tab.classList.add('tab_active');

                let tabContents = tabNavigation.nextElementSibling.querySelectorAll('.tab__content');

                tabContents.forEach(function (content) {
                    content.classList.remove('tab__content_active');
                });

                tabContents[tabIndex].classList.add('tab__content_active');
            });
        });
    });
});
