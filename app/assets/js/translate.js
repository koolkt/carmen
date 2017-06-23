import { storageAvailable } from './functions';
import { translations } from './locale';

const LOCALSTORAGE_IS_AVIABLE = storageAvailable('localStorage')

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

function setDonateLinks(locale) {
    const link = `https://dartagnans.fr/${locale}/projects/carmen-la-maison-de-georges-bizet/campaign`
    const elements = document.getElementsByClassName("discover-link");
    if (elements.length) {
        Array.from(elements).forEach(elem => {
            elem.href = link;
        });
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

export default function () {
    setTranslations(GLOBALSTATE.locale);
    setDonateLinks(GLOBALSTATE.locale);
    if (document.getElementById('changeLangButton')) {
        document.getElementById('changeLangButton').onclick = function (e) {
            // Muating var!
            e.preventDefault();
            GLOBALSTATE.locale = GLOBALSTATE.locale === 'en' ? 'fr' : 'en';
            saveLocale(GLOBALSTATE.locale);
            console.log(GLOBALSTATE.locale);
            setTranslations(GLOBALSTATE.locale);
            setDonateLinks(GLOBALSTATE.locale);
        };
    }

}