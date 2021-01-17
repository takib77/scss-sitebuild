'use strict';

const headerStyle = () => {
    const header = document.querySelector('.sticky-top');
    if (window.scrollY < 10) header.className = 'sticky-top justify-content-center p-0 bg-transparent';
    else header.className = 'sticky-top justify-content-center p-0 bg-white';
};

const brandStyle = () => {
    const navbarBrand = document.querySelector('.navbar-brand')
    if (window.scrollY < 10) navbarBrand.className = 'navbar-brand text-warning';
    else navbarBrand.className = 'navbar-brand text-dark';
};

const linkStyle = () => {
    const navLink = document.querySelectorAll('.nav-link')
    if (window.scrollY < 10) {
        navLink[0].className = 'nav-link text-white';
        navLink[1].className = 'nav-link text-white';
        navLink[2].className = 'nav-link text-white';
    }
    else {
        navLink[0].className = 'nav-link text-dark';
        navLink[1].className = 'nav-link text-dark';
        navLink[2].className = 'nav-link text-dark';
    }
};

window.onscroll = () => {
    headerStyle();
    brandStyle();
    linkStyle();
};