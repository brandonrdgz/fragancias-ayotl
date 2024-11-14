const carouselSpeed = 7000; 

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNavItems = document.querySelectorAll('.carousel-nav-item');
const wheel = document.querySelector('.wheel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentItem = 0;
let rotationAngle = 0;


document.documentElement.style.setProperty('--carousel-transition-duration', `${carouselSpeed / 1000 / 10}s`);

function showItem(index, direction) {
    
    carouselItems[currentItem].classList.remove('active');
    carouselNavItems[currentItem].classList.remove('active');

    
    currentItem = index;

    carouselItems[currentItem].classList.add('active');
    carouselNavItems[currentItem].classList.add('active');


    carouselItems.forEach(item => {
        item.style.transition = 'none';
        item.offsetHeight; 
        item.style.transition = `opacity ${carouselSpeed / 1000 / 10}s ease-in-out`;
    });

    
    rotationAngle += direction * 360;
    wheel.style.transform = `rotate(${rotationAngle}deg)`;
}

function showNextItem() {
    const nextIndex = (currentItem + 1) % carouselItems.length;
    showItem(nextIndex, 1); 
}

function showPreviousItem() {
    const previousIndex = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    showItem(previousIndex, -1); 
}


let carouselInterval = setInterval(showNextItem, carouselSpeed);


carouselNavItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const direction = index > currentItem ? 1 : -1;
        showItem(index, direction);
        resetCarouselInterval();
    });
});


leftArrow.addEventListener('click', () => {
    showPreviousItem();
    resetCarouselInterval();
});

rightArrow.addEventListener('click', () => {
    showNextItem();
    resetCarouselInterval();
});


function resetCarouselInterval() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(showNextItem, carouselSpeed);


    carouselItems.forEach(item => {
        item.style.transition = 'none';
        item.offsetHeight; 
        item.style.transition = `opacity ${carouselSpeed / 1000 / 10}s ease-in-out`;
    });
}

carousel.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(showNextItem, carouselSpeed);
});