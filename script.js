document.addEventListener('DOMContentLoaded', function() {

    // Efeito de 'fade-in' para seções e elementos
    const scrollObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, scrollObserverOptions);

    // Seleciona todos os elementos a serem animados
    const elementsToAnimate = document.querySelectorAll('.splide, .marca-link, .pilar-card, .produto-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // Inicialização do Slideshow (Splide.js)
    if (document.querySelector('#garantia-atuacao .splide')) {
        new Splide('#garantia-atuacao .splide', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
        }).mount();
    }
});