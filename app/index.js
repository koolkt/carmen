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
import { translations } from './assets/js/locale';

import petal1 from './assets/img/petal1.svg';
import petal2 from './assets/img/petal2.svg';
import petal3 from './assets/img/petal3.svg';
import petal4 from './assets/img/petal4.svg';
import petal5 from './assets/img/petal5.svg';

const petals = ['x', petal1, petal2, petal3, petal4, petal5];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(document.getElementsByClassName('wall-petal').length) {
    Array.from(document.getElementsByClassName('wall-petal')).forEach(
        elem => {
            elem.style.background = `url(${petals[getRandomInt(1,5)]}) no-repeat`;
        }
    );
}

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
    'placido-circle2': placidoImage,
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
            if (elements.length && currentTranslations[key]) {
                Array.from(elements).forEach(elem => {
                    elem.innerText = currentTranslations[key];
                });
            }
        }
    );
    changeLanguageButton(locale);
}

document.getElementById('changeLangButton').onclick = function (e) {
    // Muating var!
    e.preventDefault();
    GLOBALSTATE.locale = GLOBALSTATE.locale === 'en' ? 'fr' : 'en';
    saveLocale(GLOBALSTATE.locale);
    console.log(GLOBALSTATE.locale);
    setTranslations(GLOBALSTATE.locale);
};

function init () {
    setTranslations(GLOBALSTATE.locale);
}

const mailForm = document.getElementById('email-input');
if(mailForm) {
    mailForm.onclick = function(e) {
        e.target.value = '';
    };

    document.getElementById('submit-mail-button').onclick = function (e) {
        e.preventDefault();
        var email = mailForm.value.trim();
        if (email === 'Laissez votre mail') return;
        var http = new XMLHttpRequest();
        var url = "carmen-mail?email=".concat(email);
        var params = 'email='.concat(email);
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                document.getElementById('submit-mail-button').style.display = 'none';
                document.getElementById('sent-check').style.display = 'inline-block';
            }
        }
        http.send(params);
    }
}
init();
