const heading = document.createElement('h3');
const hText = document.createTextNode('Buy high quality organic fruits online');

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];

firstDiv.appendChild(heading);

heading.setAttribute('style','font-Style:italic');

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);

const secondDiv = divs[1];
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para,fruits);

para.id = 'fruits-total';