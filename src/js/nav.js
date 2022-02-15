const home = document.getElementById('home');
const about = document.getElementById('about');
const proyects = document.getElementById('proyects');
const services = document.getElementById('services');
const contact = document.getElementById('contact');

home.addEventListener('click', () => {
    home.classList.add('active');
    about.classList.remove('active');
    services.classList.remove('active');
    contact.classList.remove('active');
    proyects.classList.remove('active');
})
about.addEventListener('click', () => {
    about.classList.add('active');
    home.classList.remove('active');
    services.classList.remove('active');
    contact.classList.remove('active');
    proyects.classList.remove('active');
})

proyects.addEventListener('click', () => {
    home.classList.remove('active');
    about.classList.remove('active');
    proyects.classList.add('active');
    services.classList.remove('active');
    contact.classList.remove(active)
})

services.addEventListener('click', () => {
    services.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    proyects.classList.remove('active');
})

contact.addEventListener('click', () => {
    contact.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active')
    services.classList.remove('active');
    proyects.classList.remove('active');
})

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
})
