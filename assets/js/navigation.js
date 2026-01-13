// Navigation functionality
(function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav__link');
    const nav = document.querySelector('.nav');

    if (!navToggle || !navLinks) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', function () {
        const isActive = navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('.nav__toggle-icon');

        if (icon) {
            icon.textContent = isActive ? '✕' : '☰';
        }

        // Prevent body scroll when menu is open
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Update aria-expanded for accessibility
        navToggle.setAttribute('aria-expanded', isActive);
    });

    // Close mobile menu when clicking a link
    navLinkItems.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('.nav__toggle-icon');

            if (icon) {
                icon.textContent = '☰';
            }

            // Restore body scroll
            document.body.style.overflow = '';

            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('.nav__toggle-icon');

            if (icon) {
                icon.textContent = '☰';
            }

            // Restore body scroll
            document.body.style.overflow = '';

            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Add scrolled class to nav on scroll (for refined styling)
    let lastScroll = 0;
    window.addEventListener('scroll', function () {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
})();