document.addEventListener('DOMContentLoaded', function() {

    // Efeito de 'fade-in' para elementos ao rolar a página
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.splide, .pilar-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // Inicialização do Slideshow de Garantia
    if (document.querySelector('#garantia-slider')) {
        new Splide('#garantia-slider', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
        }).mount();
    }

    // Inicialização do Slideshow de Produtos
    if (document.querySelector('#produtos-slider')) {
        new Splide('#produtos-slider', {
            type: 'loop',
            perPage: 4,
            gap: '1.5rem',
            pagination: false,
            breakpoints: {
                992: { perPage: 3 },
                768: { perPage: 2 },
                576: { perPage: 1 },
            }
        }).mount();
    }

    // Inicialização do Slideshow de Marcas (COM SETAS E SEM AUTOPLAY)
    if (document.querySelector('#marcas-slider')) {
        new Splide('#marcas-slider', {
            type: 'loop',
            perPage: 6,
            gap: '1.5rem',
            autoplay: false,      /* Desativado */
            arrows: true,         /* Ativado */
            pagination: false,
            perMove: 1,
            breakpoints: {
                992: { perPage: 5 },
                768: { perPage: 4 },
                576: { perPage: 3 },
            }
        }).mount();
    }
});