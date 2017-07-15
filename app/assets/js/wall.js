import 'whatwg-fetch'
import petals from './petal.js'
import Fuse from 'fuse.js';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

const ANONYMOUS_TEXT_NODE = createText(40, 43, 6, 'Anonymous');

function addTextToPetal(petalNode, donor) {
    const isAnonymous = donor.anonymous === 't';
    const firstNameNode = isAnonymous ? ANONYMOUS_TEXT_NODE : createText(40, 38, 6, donor.first_name);
    if (!isAnonymous) {
        const lastNameNode = createText(donor.last_name.length >= 13 ? 35 : 40, 50, 6, donor.last_name);
        petalNode.appendChild(lastNameNode);
    }
    const amountNode = createText(48, 65, 6, `€ ${donor.amount}`);
    const countryNode = createText(54, 85, 6, donor.country);
    petalNode.appendChild(firstNameNode);
    petalNode.appendChild(amountNode);
    petalNode.appendChild(countryNode);
}

function getPetalNodeFromEvent(e) {
    return e.target.nodeName === 'path' || e.target.nodeName === 'text' ? e.target.parentElement : e.target;
}

function animatePetal(petalNode, isBig, donorInfo) {
    if(isBig[petalNode.id]) {
        petalNode.style.transform = 'scale(1)';
        petalNode.style.zIndex = 1;
        isBig[petalNode.id] = false;
    } else {
        addTextToPetal(petalNode, donorInfo);
        petalNode.style.transform =  'scale(7)';
        petalNode.style.zIndex = 1000;
        isBig[petalNode.id] = true;
    }
}

function createNodeFromStr(str) {
    return document.createRange().createContextualFragment(str);
}

function createPetalNode(amount) {
    const petal = createNodeFromStr(petals[getPetalNumberFromDonation(amount)]).firstElementChild;
    petal.id = `${getRandomInt(1, 1000)}-${getRandomInt(1000, 100000)}`;
    petal.style.zIndex = 1;
    return petal;
}

function createPetals (donors) {
    const wall = document.getElementById('donnors-wall');
    if (wall && donors.length) {
        const isBig = {};
        const petalElements = donors.map(d => {
            const petal = createPetalNode(d.amount);
            petal.addEventListener('click', (e) => {
                const petalNode = getPetalNodeFromEvent(e)
                animatePetal(petalNode, isBig, d);
            }, false)
            return petal;
        });
        return petalElements;
    }
    return [];
};

function renderDonnors(donorPetals) {
    const elem = document.getElementById('cn1');
    donorPetals.forEach((petal, i) => elem.appendChild(petal));
}

function setUpSearchBox(donorList, allPetalElements) {
    const wallInner = document.getElementById('cn1');
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
    var fuse = new Fuse(donorList, options);
    const searchBox = document.getElementById('donors-search');
    searchBox.addEventListener('keyup', (e) => {
        const searchQuery = searchBox.value;
        if (!searchQuery.length) {
            wallInner.innerHTML = '';
            renderDonnors(allPetalElements);
        } else {
            const result = fuse.search(searchQuery);
            const resPetals = createPetals(result)
            wallInner.innerHTML = '';
            renderDonnors(resPetals);
        }
    });
}

export default async function () {
    const wall = document.getElementById('donnors-wall');
    if (wall) {
        const res = await fetch('/carmen-donors');
        const donorList = await res.json();
        const allPetalElements = createPetals(donorList);
        setUpSearchBox(donorList, allPetalElements);
        renderDonnors(allPetalElements);
    }
}
