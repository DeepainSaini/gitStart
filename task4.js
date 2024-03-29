const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';


const fruitItem = document.querySelectorAll('.fruit');

for(let i=0;i<fruitItem.length;i++)
  {
     fruitItem[i].style.backgroundColor = 'white';
     fruitItem[i].style.padding = '10px';
     fruitItem[i].style.margin = '10px';
     fruitItem[i].style.borderRadius = '5px';
    
  }

const oddFruitItem = document.querySelectorAll('.fruit:nth-child(odd)');

for(let i=0;i<oddFruitItem.length;i++)
  {
    oddFruitItem[i].style.backgroundColor = 'lightgray';
  }
// Write answer to the questions asked below:

// const basketHeading = document.querySelectorAll('#basket-heading');
basketHeading.style.color = 'brown';

const evenFruitItem = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0;i<evenFruitItem.length;i++)
  {
    evenFruitItem[i].style.backgroundColor = 'brown';
    evenFruitItem[i].style.color = 'white';
  }
