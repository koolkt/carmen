!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e){Object.keys(e).forEach(function(t){var n=document.getElementById(t);n&&(n.src=e[t])})}function r(){var e=navigator.language.slice(0,2);if(_){var t=localStorage.getItem("locale");return t?t:e}return e}function c(e){_&&localStorage.setItem("locale",e)}function i(e){"en"===e?document.getElementById("changeLangButton").innerText="French":document.getElementById("changeLangButton").innerText="English"}function u(e,t){var n=S[e]||S[t||"fr"];Object.keys(n).forEach(function(e){var t=document.getElementsByClassName(e);t.length&&Array.from(t).forEach(function(t){t.innerText=n[e]})}),i(e)}function l(){u(y.locale)}n(2);var f=n(9),s=o(f),d=n(6),g=o(d),p=n(4),m=o(p),b=n(3),h=o(b),v=n(8),x=o(v),B=n(7),E=o(B),L=n(10),C=o(L),D=n(5),M=o(D),j=n(1),_=(0,j.storageAvailable)("localStorage");a({mainBgImage:s.default,jorgeImage:g.default,"dart-campaign-img":s.default,"header-logo":m.default,"about-top-image":h.default,"campaigne-top-text":g.default,"placido-circle":x.default,"maison-about":E.default,"villa-about":C.default,"datcha-about":M.default});var y={locale:r()},S={fr:{tCampaignMenuLink:"Campagne de financement",tCorpDonMenuLink:"Don corporatif",tDonationWallButton:"Mur des donateurs",tAboutMenuLink:"Le projet",tHomeLightboxTitle:"Sauvons la maison de Georges Bizet",tHomeLightboxP:"Lancement de la campagne de financement participatif pour sauver la maison de Georges Bizet et créer l'espace Carmen. L'espace sera destiné à être intégré au futur pôle culturel, scientifique et touristique de la ville de Bougival: le Centre Européen de Musique (CEM).",tSendButton:"Envoyer",tDonateButton:"Faites un don!",tDiscoverProject:"Découvrir le projet",tHomeTitle:"Sauvons la maison de Georges Bizet"},en:{tHomeTitle:"Lets Save the house of Georges Bizet",tCampaignMenuLink:"Fundraising Campaign",tCorpDonMenuLink:"Corporate donation",tDonationWallButton:"Donors' wall",tAboutMenuLink:"About",tHomeLightboxTitle:"Lets save the House of Georges Bizet",tHomeLightboxP:"Launching of the crowd funding campaign to save the house of Georges Bizet and create the space Carmen. This space is intended to be integrated into the future cultural, scientific and touristic center of the city of Bougival: the European Center of Music (CEM).",tSendButton:"Submit",tDonateButton:"Donate now!",tDiscoverProject:"Discover the project"}};window.myChangeLang=function(){y.locale="en"===y.locale?"fr":"en",c(y.locale),console.log(y.locale),u(y.locale)},l()},function(e,t){"use strict";function n(e){try{var t=window[e],n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==t.length}}Object.defineProperty(t,"__esModule",{value:!0}),t.storageAvailable=n},function(e,t){},function(e,t,n){e.exports=n.p+"5cdf71fefe1753e5861a6772e21f916a.png"},function(e,t,n){e.exports=n.p+"fcdd274cb4e51c3e70e5ac6022beb588.png"},function(e,t,n){e.exports=n.p+"d699ac7d65968c09a815b3018c270965.jpg"},function(e,t,n){e.exports=n.p+"fbd95054e9ded0e98ed9b314ae3cf405.jpg"},function(e,t,n){e.exports=n.p+"4cff34c6b8e9c071a0f2263c6220fc3b.png"},function(e,t,n){e.exports=n.p+"bd90aac3e01a38cdfd857eaa6ce9e870.jpg"},function(e,t,n){e.exports=n.p+"da286be7cbdfe24616d1b9a1bf4429a2.jpg"},function(e,t,n){e.exports=n.p+"661e25c6d0fec03a3217bc46a3e5bc1f.jpg"}]);