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

    const elementsToAnimate = document.querySelectorAll('.splide, .pilar-card, .video-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // --- LÓGICA PARA PLAYER DE VÍDEO ---
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', function() {
            const videoSrc = this.dataset.videoSrc;
            if (!videoSrc) return;
            
            const videoElement = document.createElement('video');
            videoElement.src = videoSrc;
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.muted = false;
            
            this.innerHTML = '';
            this.appendChild(videoElement);
            this.style.cursor = 'default';
        });
    });


    // --- INICIALIZAÇÃO DOS SLIDESHOWS ---
    if (document.getElementById('garantia-slider')) { new Splide('#garantia-slider', { type: 'loop', perPage: 1, autoplay: true, interval: 5000, pauseOnHover: true, }).mount(); }
    if (document.getElementById('produtos-slider')) { new Splide('#produtos-slider', { type: 'loop', perPage: 4, gap: '1.5rem', pagination: false, breakpoints: { 992: { perPage: 3 }, 768: { perPage: 2 }, 576: { perPage: 1 }, } }).mount(); }
    if (document.getElementById('marcas-slider')) { new Splide('#marcas-slider', { type: 'loop', perPage: 6, gap: '1.5rem', autoplay: false, arrows: true, pagination: false, perMove: 1, breakpoints: { 992: { perPage: 5 }, 768: { perPage: 4 }, 576: { perPage: 3 }, } }).mount(); }
});