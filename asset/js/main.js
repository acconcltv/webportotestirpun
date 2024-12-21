const aboutMeButton = document.getElementById('aboutMeButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

aboutMeButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

myPortoButton.addEventListener('click', () => {
    portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

const hamburgerMenu = document.getElementById('hamburgerMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

hamburgerMenu.addEventListener('click', () => {
    menuOverlay.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === menuOverlay) {
        menuOverlay.style.display = 'none';
    }
});

const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const myPortoLink = document.getElementById('myPortoLink');
const contactLink = document.getElementById('contactLink');

myPortoLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.querySelector('#portfolioSection').scrollIntoView({
        behavior: 'smooth'
    });
    menuOverlay.style.display = 'none'; 
});

contactLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.querySelector('#footerSection').scrollIntoView({
        behavior: 'smooth'
    });
    menuOverlay.style.display = 'none'; 
});

aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.querySelector('#headerSection').scrollIntoView({
        behavior: 'smooth'
    });
    menuOverlay.style.display = 'none';
});

homeLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    document.querySelector('#headerSection').scrollIntoView({
        behavior: 'smooth'
    });
    menuOverlay.style.display = 'none'; 
});

window.addEventListener('scroll', function() {
    const heroText = document.querySelector('.hero-text');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight / 3) {
        heroText.style.animation = 'slideIn 2s forwards';
    }
});

window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight / 3) {
        heroImage.style.animation = 'slideInRight 2s forwards';
    }
});

