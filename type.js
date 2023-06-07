const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('mouseleave', () => {
    const subMenu = menuItem.querySelector('.sub-menu');
    subMenu.style.display = 'none';
  });
});

window.addEventListener('scroll',() => {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.style.transform = 
    `translateY(${window.scrollY * 0.5}px)`;
});