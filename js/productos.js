const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNavItems = document.querySelectorAll('.carousel-nav-item');
let currentItem = 0;

function showItem(index) {
    carouselItems[currentItem].classList.remove('active');
    carouselNavItems[currentItem].classList.remove('active');
    currentItem = index;
    carouselItems[currentItem].classList.add('active');
    carouselNavItems[currentItem].classList.add('active');
}

function showNextItem() {
    showItem((currentItem + 1) % carouselItems.length);
}

setInterval(showNextItem, 5000);

carouselNavItems.forEach((item, index) => {
    item.addEventListener('click', () => showItem(index));
});

const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95) rotate(-3deg)';
        setTimeout(() => {
            button.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });
});

const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});

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