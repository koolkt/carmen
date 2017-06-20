'use strict';
import './assets/scss/style.scss';
import mainBgImage from './assets/img/test.jpg';
import jorgeImage from './assets/img/jorge.jpg';
import carmenLogo from './assets/img/carmen-logo.png';
import aboutImage from './assets/img/about_carmen.png';
import placidoImage from './assets/img/placido.jpg';
import maisonImage from './assets/img/maison_gb.png';
import villaImage from './assets/img/villa_v.jpg';
import datchaImage from './assets/img/datcha.jpg';
import dartLogo from './assets/img/dartagnans_logo.png';
import { storageAvailable } from './assets/js/functions';

const LOCALSTORAGE_IS_AVIABLE = storageAvailable('localStorage')

function setImages (images) {
    Object.keys(images).forEach(id => {
        const elem = document.getElementById(id)
        if (elem) {
            elem.src = images[id];
        }
    });
}

setImages({
    mainBgImage,
    jorgeImage,
    'dart-campaign-img': mainBgImage,
    'header-logo': carmenLogo,
    'about-top-image': aboutImage,
    'campaigne-top-text': jorgeImage,
    'placido-circle': placidoImage,
    'maison-about': maisonImage,
    'villa-about': villaImage,
    'datcha-about': datchaImage,
    'dartagnans-logo': dartLogo,
});

function initLocale () {
    const defaultLocale = navigator.language.slice(0,2);
    if (LOCALSTORAGE_IS_AVIABLE) {
        const locale = localStorage.getItem('locale')
	if(locale) {
            return locale;
        } else {
            return defaultLocale;
        }
    }
    else {
	return defaultLocale;
    }
}

var GLOBALSTATE = {
    locale: initLocale(),
}

function saveLocale(locale) {
    if (LOCALSTORAGE_IS_AVIABLE) {
        localStorage.setItem('locale', locale);
    }
    else {
	return;
    }
}

const translations = {
    fr: {
        tCampaignMenuLink: 'Campagne de financement',
        tCorpDonMenuLink:'Don corporatif',
        tDonationWallButton: 'Mur des donateurs',
        tAboutMenuLink: 'Le projet',
        tHomeLightboxTitle: 'Sauvons la maison de Georges Bizet',
        tHomeLightboxP: "Lancement de la campagne de financement participatif pour sauver la maison de Georges Bizet et créer l'espace Carmen. L'espace sera destiné à être intégré au futur pôle culturel, scientifique et touristique de la ville de Bougival: le Centre Européen de Musique (CEM).",
        tSendButton: 'Envoyer',
        tDonateButton: 'Faites un don!',
        tDiscoverProject: 'Découvrir le projet',
        tHomeTitle: 'Sauvons la maison de Georges Bizet',
    },
    en: {
        tHomeTitle: 'Lets Save the house of Georges Bizet',
        tCampaignMenuLink: 'Fundraising Campaign',
        tCorpDonMenuLink:'Corporate donation',
        tDonationWallButton: 'Donors\' wall',
        tAboutMenuLink: 'About',
        tHomeLightboxTitle: 'Lets save the House of Georges Bizet',
        tHomeLightboxP: "Launching of the crowd funding campaign to save the house of Georges Bizet and create the space Carmen. This space is intended to be integrated into the future cultural, scientific and touristic center of the city of Bougival: the European Center of Music (CEM).",
        tSendButton: 'Submit',
        tDonateButton: 'Donate now!',
        tDiscoverProject: 'Discover the project',
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
        key => {
            const elements = document.getElementsByClassName(key)
            if (elements.length) {
                Array.from(elements).forEach(elem => {
                    elem.innerText = currentTranslations[key];
                });
            }
        }
    );
    changeLanguageButton(locale);
}

window.myChangeLang = function () {
    // Muating var!
    GLOBALSTATE.locale = GLOBALSTATE.locale === 'en' ? 'fr' : 'en';
    saveLocale(GLOBALSTATE.locale);
    console.log(GLOBALSTATE.locale);
    setTranslations(GLOBALSTATE.locale);
};

function init () {
    setTranslations(GLOBALSTATE.locale);
}
init();
