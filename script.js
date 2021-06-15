// Deel 1
const bigFiveButtons = document.getElementsByClassName('big-five-button');

const lionSpotted = () => {
    const listElement = document.createElement('li');
    listElement.classList.add('spotted-animals-list-item');
    const animalsSpottedList = document.getElementById('spotted-animals-list');
    animalsSpottedList.appendChild(listElement);
    listElement.innerText = 'Lion';
    console.log('Lion');
};

const leopardSpotted = () => {
    const listElement = document.createElement('li');
    listElement.classList.add('spotted-animals-list-item');
    const animalsSpottedList = document.getElementById('spotted-animals-list');
    animalsSpottedList.appendChild(listElement);
    listElement.innerText = 'Leopard';
    console.log('Leopard');
};

const elephantSpotted = () => {
    const listElement = document.createElement('li');
    listElement.classList.add('spotted-animals-list-item');
    const animalsSpottedList = document.getElementById('spotted-animals-list');
    animalsSpottedList.appendChild(listElement);
    listElement.innerText = 'Elephant';
    console.log('Elephant');
};

const rhinoSpotted = () => {
    const listElement = document.createElement('li');
    listElement.classList.add('spotted-animals-list-item');
    const animalsSpottedList = document.getElementById('spotted-animals-list');
    animalsSpottedList.appendChild(listElement);
    listElement.innerText = 'Rhino';
    console.log('Rhino');
};

const buffaloSpotted = () => {
    const listElement = document.createElement('li');
    listElement.classList.add('spotted-animals-list-item');
    const animalsSpottedList = document.getElementById('spotted-animals-list');
    animalsSpottedList.appendChild(listElement);
    listElement.innerText = 'Buffalo';
    console.log('Buffalo');
};

bigFiveButtons[0].addEventListener('click', lionSpotted);
bigFiveButtons[1].addEventListener('click', leopardSpotted);
bigFiveButtons[2].addEventListener('click', elephantSpotted);
bigFiveButtons[3].addEventListener('click', rhinoSpotted);
bigFiveButtons[4].addEventListener('click', buffaloSpotted);


// Deel 2
// const removeFirst = () => {
//     const child = document.querySelector('.spotted-animals-list-item');
//     const parent = document.querySelector('#spotted-animals-list');
//     parent.removeChild(child);
// };

// const removeFirst = () => {
//     const child = document.querySelector('.spotted-animals-list-item');
//     child.parentNode.removeChild(child);
// };

const removeFirst = () => {
    const parent = document.querySelector('#spotted-animals-list');
    parent.removeChild(parent.childNodes[0]);
};

document.getElementById('remove-first-item-button').addEventListener('click', removeFirst);


// Deel 3
// const removeAll = () => document.getElementById('spotted-animals-list').innerHTML = '';
const removeAll = () => {
    const animalsSpotted = document.getElementById('spotted-animals-list');
    while (animalsSpotted.firstChild) {
        animalsSpotted.removeChild(animalsSpotted.firstChild);
    }
};
document.getElementById('remove-all-button').addEventListener('click', removeAll);