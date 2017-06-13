'use strict';
import './assets/scss/style.scss';
import mainBgImage from './assets/img/test.jpg';
import jorgeImage from './assets/img/jorge.jpg';
import carmenLogo from './assets/img/carmen-logo.png';

try {
    const mainBgImageElem = document.getElementById('mainBgImage');
    const jorgeTestimonialImgElem = document.getElementById('jorgeImage');
    const campaignImageElem = document.getElementById('dart-campaign-img');
    const headerLogoElem = document.getElementById('header-logo');

    if (mainBgImageElem) { mainBgImageElem.src = mainBgImage }
    if (jorgeTestimonialImgElem) { jorgeTestimonialImgElem.src = jorgeImage }
    if (campaignImageElem) { campaignImageElem.src = mainBgImage }
    if (headerLogoElem) { headerLogoElem.src = carmenLogo }
} catch (e) {
    console.log('Error');
}


var GLOBALSTATE = {
    locale: navigator.language.slice(0,2),
}

const translations = {
    fr: {
        campaignMenuLink: 'Campagne de financement',
        corpDonMenuLink:'Don corporatif',
        donateButton: 'Faites un don',
        donationWallButton: 'Mur des donateurs',
        aboutMenuLink: 'À propos',
    },
    en: {
        campaignMenuLink: 'Fundraising Campaign',
        corpDonMenuLink:'Corporate donation',
        donateButton: 'Donate now',
        donationWallButton: 'Donors\' wall',
        aboutMenuLink: 'About',
    }
};

function changeLanguageButton(locale) {
    if (locale === 'en') {
        document.getElementById('changeLangButton').innerText = 'French';
    } else {
        document.getElementById('changeLangButton').innerText = 'English';
    }
}

function setTranslations (locale, defaultLocale) {
    const currentTranslations = translations[locale] || translations[defaultLocale || 'fr'];
    Object.keys(currentTranslations).forEach(
        key => document.getElementById(key).innerText = currentTranslations[key]
    );
    changeLanguageButton(locale);
}

window.myChangeLang = function () {
    // Muating var!
    GLOBALSTATE.locale = GLOBALSTATE.locale === 'en' ? 'fr' : 'en'
    console.log(GLOBALSTATE.locale);
    setTranslations(GLOBALSTATE.locale);
};

function init () {
    setTranslations(GLOBALSTATE.locale);
}
init();
