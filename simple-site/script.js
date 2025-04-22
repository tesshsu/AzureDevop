document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = document.getElementById('welcome-text');

    // Initial styles for animation
    welcomeText.style.opacity = '0';
    welcomeText.style.transform = 'translateY(20px)';
    welcomeText.style.transition = 'all 0.5s ease-out';

    // Fade-in and bounce animation
    let opacity = 0;
    let position = 20;
    let bounceDirection = -1; // For bounce effect

    function animate() {
        if (opacity < 1) {
            opacity += 0.02;
            welcomeText.style.opacity = opacity;
        }

        if (position > 0) {
            position += bounceDirection * 2;
            welcomeText.style.transform = `translateY(${position}px)`;
            if (position <= -10) {
                bounceDirection = 1; // Reverse direction for bounce
            }
        }

        if (opacity < 1 || position > 0) {
            requestAnimationFrame(animate);
        }
    }

    // Start animation
    requestAnimationFrame(animate);
});