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
