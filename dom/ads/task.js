function rotateText() {
    let rotators = document.querySelectorAll('.rotator');

    rotators.forEach(function(rotator) {
        let cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let activeCaseIndex = cases.findIndex(c => c.classList.contains('rotator__case_active'));
        let nextCaseIndex = (activeCaseIndex + 1) % cases.length;

        cases[activeCaseIndex].classList.remove('rotator__case_active');
        cases[nextCaseIndex].classList.add('rotator__case_active');

        let nextCaseSpeed = cases[nextCaseIndex].dataset.speed;
        let nextCaseColor = cases[nextCaseIndex].dataset.color;

        cases[nextCaseIndex].style.color = nextCaseColor;

        setTimeout(rotateText, nextCaseSpeed);
    });
}

rotateText();
