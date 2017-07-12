import 'whatwg-fetch'
import petals from './petal.js'

function createNodeFromStr(str) {
    return document.createRange().createContextualFragment(str);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function log() {
    console.log(...arguments);
}

/* function getRandomInt(min, max) {
 *     return Math.floor(Math.random() * (max - min + 1)) + min;
 * }
 * */

function range(n) {
    return [...Array(n).keys()];
}

const testJson = (amount) => ({
    first_name: "Georges",
    last_name: "Ssssssss",
    amount,
    anonymous: "f",
    country: 'FR',
});

function generateTestData() {
    return range(getRandomInt(10,1000)).map(_ => testJson(getRandomInt(10,10000)))
}

function getPetalNumberFromDonation(donationAmount) {
    if(donationAmount <= 99) {
        return 1;
    } else if (donationAmount <= 999){
        return 2;
    } else if (donationAmount <= 4999) {
        return 3;
    } else if (donationAmount <= 9999) {
        return 4;
    } else {
        return 5;
    }
}

function getColumns () {
    return range(23).slice(1).map( cn => document.getElementById(`cn${cn}`));
}

function partition(elems, cSize) {
    return range(Math.ceil(elems.length/cSize)).map(i => elems.slice(cSize*i, (cSize*i) + cSize));
}

function createText(x, y, fontSize, petalText) {
    var newText = document.createElementNS("http://www.w3.org/2000/svg","text");
    newText.setAttributeNS(null,"x",x);
    newText.setAttributeNS(null,'y',y); 
    newText.setAttributeNS(null,'font-size', fontSize);
    newText.setAttributeNS(null,'font-weight', 'bold');
    newText.setAttributeNS(null,'fill','white');
    newText.appendChild(document.createTextNode(petalText))
    return newText;
}

function renderDonnors (donors) {
    const columns = getColumns();
    const wall = document.getElementById('donnors-wall');
    if (wall) {
        const isBig = {};
        const petalElements = donors.map(d => {
            const petal = createNodeFromStr(petals[getPetalNumberFromDonation(d.amount)]).firstElementChild;
            petal.id = `${getRandomInt(1, 1000)}-${getRandomInt(1000, 100000)}`;
            petal.style.zIndex = 1;
            petal.addEventListener('click', (e) => {
                console.log(e.srcElement.nodeName)
                const elem = e.srcElement.nodeName === 'path' || e.srcElement.nodeName === 'text' ? e.srcElement.parentElement : e.srcElement;
                if(isBig[elem.id]) {
                    elem.style.transform = 'scale(1)';
                    elem.style.zIndex = 1;
                    isBig[elem.id] = false;
                } else {
                    const nameString = `${d.first_name} ${d.last_name}`;
                    const donnorName = createText(32, 43, 6, d.anonymous  === 't' ? 'Anonymous' : nameString);
                    const amount = createText(48, 60, 6, `€ ${d.amount}`);
                    const country = createText(54, 85, 6, d.country);
                    elem.appendChild(donnorName);
                    elem.appendChild(amount);
                    elem.appendChild(country);
                    elem.style.transform =  'scale(7)';
                    elem.style.zIndex = 1000;
                    isBig[elem.id] = true;
                }
            }, false)
            return petal;
        });
        window.pppetal = petalElements;
        petalElements.forEach((elem, i) => columns[0].appendChild(elem));
    }
};

export function fetchDonors () {
    fetch('/carmen-donors')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            renderDonnors(json);
        }).catch(function(ex) {
            log('parsing failed', ex)
        })
}

export default function () {
    const wall = document.getElementById('donnors-wall');
    if (wall) {
        renderDonnors(generateTestData());
        /* fetchDonors();*/
    }
    /* if(document.getElementsByClassName('wall-petal').length) {
     *     Array.from(document.getElementsByClassName('wall-petal')).forEach(
     *         elem => {
     *             elem.style.background = `url(${petals[getRandomInt(1,5)]}) no-repeat`;
     *         }
     *     );
     * }*/

}
