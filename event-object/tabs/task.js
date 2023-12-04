document.addEventListener('DOMContentLoaded', function () {
    var tabNavigations = document.querySelectorAll('.tab__navigation');

    tabNavigations.forEach(function (tabNavigation) {
        var tabs = tabNavigation.querySelectorAll('.tab');

        tabs.forEach(function (tab, tabIndex) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) {
                    t.classList.remove('tab_active');
                });

                tab.classList.add('tab_active');

                var tabContents = tabNavigation.nextElementSibling.querySelectorAll('.tab__content');

                tabContents.forEach(function (content) {
                    content.classList.remove('tab__content_active');
                });

                tabContents[tabIndex].classList.add('tab__content_active');
            });
        });
    });
});
