function toggleMenu() {
    const m = document.querySelector(".menu-links");
    const i = document.querySelector(".hamburger-icon");
    m.classList.toggle("open");
    i.classList.toggle("open");
    return;
}

function openInNewTab(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated');

    setTimeout(() => {
        document.getElementById('profile').classList.add('fadeInUp');
    }, 100);

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

function filterExperiences() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filterCategory = document.getElementById('filter-category').value.toLowerCase();
    const filterBranch = document.getElementById('filter-branch').value.toLowerCase();
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const category = item.dataset.category.toLowerCase();
        const branch = item.dataset.branch.toLowerCase();

        const matchesSearch = title.includes(searchQuery);
        const matchesCategory = filterCategory === 'all' || category.includes(filterCategory);
        const matchesBranch = filterBranch === 'all' || branch.includes(filterBranch);

        if (matchesSearch && matchesCategory && matchesBranch) {
            item.classList.remove('fadeOut');
            item.classList.add('fadeIn');
            item.style.display = 'block';
        } else {
            item.classList.remove('fadeIn');
            item.classList.add('fadeOut');
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

function filterInvolvements() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filterPosition = document.getElementById('filter-position').value.toLowerCase();
    const involvementItems = document.querySelectorAll('.involvement-item');

    involvementItems.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const position = item.dataset.position.toLowerCase();

        const matchesSearch = title.includes(searchQuery);
        const matchesPosition = filterPosition === 'all' || position.includes(filterPosition);

        if (matchesSearch && matchesPosition) {
            item.classList.remove('fadeOut');
            item.classList.add('fadeIn');
            item.style.display = 'block';
        } else {
            item.classList.remove('fadeIn');
            item.classList.add('fadeOut');
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}
