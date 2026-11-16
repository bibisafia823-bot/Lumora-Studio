// Mobile menu (hamburger)
var burger = document.getElementById('hamburger');
var menu = document.getElementById('navMenu');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    burger.setAttribute('aria-expanded', menu.classList.contains('active'));
});
