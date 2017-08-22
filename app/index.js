'use strict';
import './assets/scss/style.scss';
import initTransaltions from './assets/js/translate';
import initImages from './assets/js/images';
import initVideoButtons from './assets/js/video';
import initWall from './assets/js/wall';

function doInLocation(locationToFunction) {
    const parser = document.createElement('a');
    parser.href = window.location.href;
    const uri = parser.pathname.split('/').slice(-1)[0].split('.')[0] || '/';
    const defaultFunc = _ => console.log(`Inside unknown page: ${uri}`);
    const func = locationToFunction[uri] || defaultFunc;
    func(uri);
}

function init () {
    const logUri = (testUri) => (uri) => console.log(`Inside ${testUri}: ${uri}`);
    const setMenuColor = (menuId) => _ => (document.getElementById(menuId) || {style: {color: ''}}).style.color = '#8f1a24';
    const locationToFunction = {
        about: setMenuColor('lamaisonMenu'),
        'donors-wall': setMenuColor('donorsWallMenu'),
        campaigne: setMenuColor('campaigneMenu'),
        project: setMenuColor('leprojetMenu'),
        comite: setMenuColor('comiteMenu'),
        '/': logUri('home'),
    };
    doInLocation(locationToFunction);
    /* initTransaltions();*/
    initImages();
    initVideoButtons();
    initWall();
}

init();
