window.addEventListener('scroll', function() {
    let revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(function(element) {
        let elementPosition = element.getBoundingClientRect();

        if (elementPosition.top < window.innerHeight && elementPosition.bottom >= 0) {
            element.classList.add('reveal_active');
        }
    });
});