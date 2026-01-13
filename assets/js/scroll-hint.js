// Elegant Scroll Hint Interaction
document.addEventListener('DOMContentLoaded', function() {
    const scrollHint = document.getElementById('scrollHint');
    
    if (scrollHint) {
        scrollHint.addEventListener('click', function() {
            // Calculate scroll distance (70% of viewport height for elegant scroll)
            const scrollDistance = window.innerHeight * 0.7;
            
            // Smooth scroll down
            window.scrollTo({
                top: scrollDistance,
                behavior: 'smooth'
            });
        });
        
        // Hide scroll hint after user starts scrolling
        let hasScrolled = false;
        window.addEventListener('scroll', function() {
            if (!hasScrolled && window.scrollY > 100) {
                hasScrolled = true;
                scrollHint.style.opacity = '0';
                scrollHint.style.pointerEvents = 'none';
            }
        });
    }
});
