window.addEventListener('scroll',() => {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.style.transform = 
    `translateY(${window.scrollY * 0.5}px)`;
});

