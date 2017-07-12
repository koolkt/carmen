import 'whatwg-fetch'
import petals from './petal.js'
import Fuse from 'fuse.js';

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

function range(n) {
    return [...Array(n).keys()];
}

const testJson = (amount) => ({
    first_name: "Dominique",
    last_name: "Daveau",
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

function createPetals (donors) {
    const columns = getColumns();
    const wall = document.getElementById('donnors-wall');
    if (wall) {
        const isBig = {};
        const petalElements = donors.map(d => {
            const petal = createNodeFromStr(petals[getPetalNumberFromDonation(d.amount)]).firstElementChild;
            petal.id = `${getRandomInt(1, 1000)}-${getRandomInt(1000, 100000)}`;
            petal.style.zIndex = 1;
            petal.addEventListener('click', (e) => {
                const elem = e.srcElement.nodeName === 'path' || e.srcElement.nodeName === 'text' ? e.srcElement.parentElement : e.srcElement;
                if(isBig[elem.id]) {
                    elem.style.transform = 'scale(1)';
                    elem.style.zIndex = 1;
                    isBig[elem.id] = false;
                } else {
                    if (d.anonymous  === 'f') {
                        const firstName = createText(40, 38, 6, d.first_name);
                        const lastName = createText(d.last_name.length >= 13 ? 35 : 40, 50, 6, d.last_name);
                        elem.appendChild(firstName);
                        elem.appendChild(lastName);
                    } else {
                        const firstName = createText(40, 43, 6, 'Anonymous');
                        elem.appendChild(firstName);
                    }
                    const amount = createText(48, 65, 6, `€ ${d.amount}`);
                    const country = createText(54, 85, 6, d.country);
                    elem.appendChild(amount);
                    elem.appendChild(country);
                    elem.style.transform =  'scale(7)';
                    elem.style.zIndex = 1000;
                    isBig[elem.id] = true;
                }
            }, false)
            return petal;
        });
        return petalElements;
    }
};

function renderDonnors(donorPetals) {
    const elem = document.getElementById('cn1');
    donorPetals.forEach((petal, i) => elem.appendChild(petal));
}

export default async function () {
    const wall = document.getElementById('donnors-wall');
    const wallInner = document.getElementById('cn1');
    if (wall) {
        const res = await fetch('/carmen-donors');
        const donorslist = await res.json();
        const allPetalElements = createPetals(donorslist);
        const options = {
            shouldSort: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                'first_name',
                'last_name',
                'country',
            ]
        };
        var fuse = new Fuse(donorslist, options); // "list" is the item array
        const searchBox = document.getElementById('donors-search');
        searchBox.addEventListener('keyup', (e) => {
            const searchQuery = searchBox.value;
            if (!searchQuery.length) {
                wallInner.innerHTML = '';
                renderDonnors(allPetalElements);
            } else {
                const result = fuse.search(searchQuery);
                const respetals = createPetals(result)
                wallInner.innerHTML = '';
                renderDonnors(respetals);
            }
    });
        renderDonnors(allPetalElements);
    }
}
