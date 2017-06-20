import petal1 from '../img/petal1.svg';
import petal2 from '../img/petal2.svg';
import petal3 from '../img/petal3.svg';
import petal4 from '../img/petal4.svg';
import petal5 from '../img/petal5.svg';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function () {
    const petals = ['x', petal1, petal2, petal3, petal4, petal5];
    if(document.getElementsByClassName('wall-petal').length) {
        Array.from(document.getElementsByClassName('wall-petal')).forEach(
            elem => {
                elem.style.background = `url(${petals[getRandomInt(1,5)]}) no-repeat`;
            }
        );
    }

}
