// Simple script to trigger animations if not using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-reveal');
    elements.forEach(el => {
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.opacity = "1";
        }, 100);
    });
});
