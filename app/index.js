'use strict';
import './assets/scss/style.scss';
import initTransaltions from './assets/js/translate';
import initImages from './assets/js/images';
import initVideoButtons from './assets/js/video';
import initWall from './assets/js/wall';

function init () {
    initTransaltions();
    initImages();
    initVideoButtons();
    initWall();
}

init();
