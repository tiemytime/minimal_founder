// Navigation functionality
(function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav__link');
    
    if (!navToggle || !navLinks) return;
    
    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        const isActive = navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('.nav__toggle-icon');
        
        if (icon) {
            icon.textContent = isActive ? '✕' : '☰';
        }
        
        // Update aria-expanded for accessibility
        navToggle.setAttribute('aria-expanded', isActive);
    });
    
    // Close mobile menu when clicking a link
    navLinkItems.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('.nav__toggle-icon');
            
            if (icon) {
                icon.textContent = '☰';
            }
            
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('.nav__toggle-icon');
            
            if (icon) {
                icon.textContent = '☰';
            }
            
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
})();