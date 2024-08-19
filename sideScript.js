document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated');

    animatedElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('fadeInUp');
        }
    });

    window.addEventListener('scroll', function () {
        animatedElements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add('fadeInUp');
            }
        });
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const buffer = 200;
        return (
            rect.top <= (window.innerHeight - buffer) &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
