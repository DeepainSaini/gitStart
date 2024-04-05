const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

  
const descriptionInput = document.createElement('input');
descriptionInput.type = 'text';
descriptionInput.id = 'description';


const button = form.querySelector('button');

form.insertBefore(descriptionInput, button);

// Show the fruit description in italics on the next line
form.addEventListener('submit',function(event){

      event.preventDefault();
      const fruitToAdd = document.getElementById('fruit-to-add');
      
      const newLi = document.createElement('li');
      const newLiText = document.createTextNode(fruitToAdd.value);
      newLi.appendChild(newLiText);
      newLi.className = 'fruit';

      const btn = document.createElement('button');
      const btnTxt = document.createTextNode('x');
      btn.appendChild(btnTxt);
      btn.className = 'delete-btn';
      newLi.appendChild(btn);
      
      const fruitDes = document.querySelector('#description');
      const para = document.createElement('p');
      para.innerHTML = `<br>${fruitDes.value}`;
      para.style.fontStyle = 'italic';
      newLi.appendChild(para);

     
      
      fruits.appendChild(newLi);

})

fruits.addEventListener('click',function(event){

      if(event.target.classList.contains('delete-btn'))
      {
            const fruitToDelete = event.target.parentElement;
            fruits.removeChild(fruitToDelete);
      }
})

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter');

filter.addEventListener("keyup",function(event){

      const textEntered = event.target.value.toLowerCase();
      const fruitItems = document.getElementsByClassName('fruit');
      
      for(let i=0;i<fruitItems.length;i++)
      {
            const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
            const currentFruitDes = fruitItems[i].lastElementChild.textContent.toLowerCase();
            // console.log(currentFruitDes);
            
            if(currentFruitText.indexOf(textEntered) == -1 && currentFruitDes.indexOf(textEntered) === -1 )
            {
                  fruitItems[i].style.display = "none";
            }
            else{
                  fruitItems[i].style.display = "flex";
            }
      }

    })