// Scroll-triggered animations
(function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Show all elements immediately
        document.querySelectorAll('.fade-in').forEach(function(el) {
            el.classList.add('visible');
        });
        return;
    }
    
    // Intersection Observer options
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -10% 0px'
    };
    
    // Create observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Get stagger delay from data attribute (PRD: 100ms between elements)
                const staggerIndex = entry.target.getAttribute('data-stagger');
                const baseDelay = 100;
                const staggerDelay = staggerIndex ? parseInt(staggerIndex) * baseDelay : 0;
                
                // Add visible class with stagger effect
                setTimeout(function() {
                    entry.target.classList.add('visible');
                }, staggerDelay);
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

// Optional: Add parallax or other scroll effects here
const handleScroll = debounce(function() {
    // Add custom scroll behaviors if needed
}, 10);

window.addEventListener('scroll', handleScroll);
})();