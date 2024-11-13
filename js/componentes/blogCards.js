

const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.9) rotate(2deg)';
        card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        setTimeout(() => {
            card.style.transform = 'scale(1) rotate(0deg)';
            card.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
        }, 300);
    });
});
