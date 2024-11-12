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