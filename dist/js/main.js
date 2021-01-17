'use strict';

const headerStyle = () => {
    const header = document.querySelector('.nav');
    if (window.scrollY < 10) header.className = 'nav';
    else header.className = 'nav bg-white';
};

const brandStyle = () => {
    const navbarBrand = document.querySelector('.nav__brandlink')
    if (window.scrollY < 10) navbarBrand.className = 'nav__brandlink text-warning';
    else navbarBrand.className = 'nav__brandlink text-black';
};

const linkStyle = () => {
    const navLink = document.querySelectorAll('.nav__link')
    if (window.scrollY < 10) {
        navLink[0].className = 'nav__link text-white';
        navLink[1].className = 'nav__link text-white';
        navLink[2].className = 'nav__link text-white';
    }
    else {
        navLink[0].className = 'nav__link text-black';
        navLink[1].className = 'nav__link text-black';
        navLink[2].className = 'nav__link text-black';
    }
};

window.onscroll = () => {
    headerStyle();
    brandStyle();
    linkStyle();
};