!function(e){function n(o){if(t[o])return t[o].exports;var a=t[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){Object.keys(e).forEach(function(n){var t=document.getElementById(n);t&&(t.src=e[n])})}function u(e){"en"===e?document.getElementById("changeLangButton").innerText="French":document.getElementById("changeLangButton").innerText="English"}function r(e,n){var t=B[e]||B[n||"fr"];Object.keys(t).forEach(function(e){document.getElementById(e)&&(document.getElementById(e).innerText=t[e])}),u(e)}function c(){r(b.locale)}t(1);var d=t(5),l=o(d),f=t(4),s=o(f),g=t(3),p=o(g),m=t(2),h=o(m);i({mainBgImage:l.default,jorgeImage:s.default,"dart-campaign-img":l.default,"header-logo":p.default,"about-top-image":h.default});var b={locale:navigator.language.slice(0,2)},B={fr:a({campaignMenuLink:"Campagne de financement",corpDonMenuLink:"Don corporatif",donateButton:"Faites un don",donationWallButton:"Mur des donateurs",aboutMenuLink:"À propos",homeLightboxTitle:"Sauvons la maison de Georges Bizet",homeLightboxP:"Lancement de la campagne de financement participatif pour sauver la maison de Georges Bizet et créer l'espace Carmen. L'espace sera destiné à être intégré au futur pôle culturel, scientifique et touristique de la ville de Bougival: le Centre Européen de Musique (CEM).",sendButton:"Envoyer"},"donateButton","donnez maintenant!"),en:a({campaignMenuLink:"Fundraising Campaign",corpDonMenuLink:"Corporate donation",donateButton:"Donate now",donationWallButton:"Donors' wall",aboutMenuLink:"About",homeLightboxTitle:"Lets save the House of Georges Bizet",homeLightboxP:"Launching of the crowd funding campaign to save the house of Georges Bizet and create the space Carmen. This space is intended to be integrated into the future cultural, scientific and touristic center of the city of Bougival: the European Center of Music (CEM).",sendButton:"Submit"},"donateButton","donate now!")};window.myChangeLang=function(){b.locale="en"===b.locale?"fr":"en",console.log(b.locale),r(b.locale)},c()},function(e,n){},function(e,n,t){e.exports=t.p+"5cdf71fefe1753e5861a6772e21f916a.png"},function(e,n,t){e.exports=t.p+"fcdd274cb4e51c3e70e5ac6022beb588.png"},function(e,n,t){e.exports=t.p+"52537d922f9790d9350edb5e17e2f1a2.jpg"},function(e,n,t){e.exports=t.p+"da286be7cbdfe24616d1b9a1bf4429a2.jpg"}]);