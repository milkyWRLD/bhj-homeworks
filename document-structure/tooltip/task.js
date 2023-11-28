document.addEventListener("DOMContentLoaded", function() {
    var tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();

            var tooltipText = this.getAttribute('title');
            var tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;

            document.body.appendChild(tooltipElement);

            var position = this.getBoundingClientRect();
            tooltipElement.style.top = position.bottom + 'px';
            tooltipElement.style.left = position.left + 'px';

            tooltipElement.classList.add('tooltip_active');

            document.addEventListener('click', function hideTooltip(e) {
                if (e.target !== tooltipElement) {
                    tooltipElement.classList.remove('tooltip_active');
                    document.removeEventListener('click', hideTooltip);
                    setTimeout(function() {
                        tooltipElement.remove();
                    }, 300);
                }
            });
        });
    });
});
