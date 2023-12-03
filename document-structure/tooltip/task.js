document.addEventListener("DOMContentLoaded", function () {
    let tooltips = document.querySelectorAll('.has-tooltip');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('click', function (event) {
            event.preventDefault();

            let tooltipText = this.getAttribute('title');
            let tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;

            document.body.appendChild(tooltipElement);

            let position = this.getBoundingClientRect();
            tooltipElement.style.top = position.bottom + 'px';
            tooltipElement.style.left = position.left + 'px';

            tooltipElement.classList.add('tooltip_active');

            function hideTooltip(e) {
                if (e.target !== tooltip) {
                    tooltipElement.classList.remove('tooltip_active');
                    document.removeEventListener('click', hideTooltip);
                    tooltip.removeEventListener('click', hideTooltip);
                    setTimeout(function () {
                        tooltipElement.remove();
                    }, 300);
                }
            }

            document.addEventListener('click', hideTooltip);
            tooltip.addEventListener('click', hideTooltip);
        });
    });
});
