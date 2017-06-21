import petal1 from '../img/petal1.svg';
import petal2 from '../img/petal2.svg';
import petal3 from '../img/petal3.svg';
import petal4 from '../img/petal4.svg';
import petal5 from '../img/petal5.svg';
import 'whatwg-fetch'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const petals = ['x', petal1, petal2, petal3, petal4, petal5];

const testJson = [
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
        {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "5",
        anonymous: "f"
    },
    {
        first_name: "Anonyme",
        last_name: "Ssssssss",
        amount: "10000",
        anonymous: "f"
    },
];

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
    return [...Array(23).keys()].slice(1).map( cn => document.getElementById(`cn${cn}`));
}

function renderDonnors (donors) {
    const columns = getColumns();
    const wall = document.getElementById('donnors-wall');
    if (wall) {
        const petalElements = donors.map(d => {
            const petal = document.createElement('div');
            petal.className += 'wall-petal';
            petal.style.background = `url(${petals[getPetalNumberFromDonation(d.amount)]}) no-repeat`;
            return petal;
        });
        petalElements.forEach((elem, i) => {
            columns[(i % 22)].appendChild(elem);
        });
    }
};

export function fetchDonors () {
    fetch('/carmen-donors')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            renderDonnors(json);
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
}

export default function () {
    const wall = document.getElementById('donnors-wall');
    if (wall) {
        fetchDonors();
    }
    /* if(document.getElementsByClassName('wall-petal').length) {
     *     Array.from(document.getElementsByClassName('wall-petal')).forEach(
     *         elem => {
     *             elem.style.background = `url(${petals[getRandomInt(1,5)]}) no-repeat`;
     *         }
     *     );
     * }*/

}
