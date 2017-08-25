import mainBgImage from '../img/test.jpg';
import jorgeImage from '../img/jorge.jpg';
import carmenLogo from '../img/carmen-logo.jpg';
import aboutImage from '../img/about_carmen.png';
import placidoImage from '../img/placido.jpg';
import maisonImage from '../img/maison_gb.jpg';
import villaImage from '../img/villa_v.jpg';
import datchaImage from '../img/datcha.jpg';
import dartLogo from '../img/dartagnans_logo.png';
import jorgeImageCircle from '../img/jorge_chamine_circle.jpg';

function setImages (images) {
    Object.keys(images).forEach(id => {
        const elem = document.getElementById(id)
        if (elem) {
            elem.src = images[id];
        }
    });
}

export default function () {
    setImages({
        mainBgImage,
        jorgeImage,
        'dart-campaign-img': mainBgImage,
        'about-top-image': aboutImage,
        'campaigne-top-text': jorgeImage,
        'placido-circle': placidoImage,
        'jorge-circle': jorgeImageCircle,
        'maison-about': maisonImage,
        'villa-about': villaImage,
        'datcha-about': datchaImage,
        'dartagnans-logo': dartLogo,
        'placido-circle2': placidoImage,
    });
}
