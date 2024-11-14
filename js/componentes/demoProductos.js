
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

//Función del botón comprar

const button = document.querySelector('.ripple-button');

        button.addEventListener('click', function(e) {
            // Remover ondas anteriores
            const existingRipples = this.getElementsByClassName('ripple');
            Array.from(existingRipples).forEach(ripple => ripple.remove());

            // Crear nuevo efecto de onda
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size/2}px`;
            ripple.style.top = `${e.clientY - rect.top - size/2}px`;
            
            this.appendChild(ripple);
            
            // Efecto de presión
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Remover el efecto después de la animación
            setTimeout(() => {
                ripple.remove();
            }, 800);
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
        

