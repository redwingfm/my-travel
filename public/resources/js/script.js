const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const blurHeader = () => {
  const header = document.querySelector('#header');

  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);


const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop    = section.offsetTop - 50;
    const sectionId     = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href *= ${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href *= ${sectionId}]`).classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);


const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  reset: true
});

sr.reveal('.home__data, .explore__data, .explore__user, .footer__container');
sr.reveal('.home__card', {delay: 600, distance: '100px', interval: 100});
sr.reveal('.about__data, .join__image', {origin: 'right'});
sr.reveal('.about__data, .join__data', {origin: 'left'});
sr.reveal('.popular__card', {interval: 200});