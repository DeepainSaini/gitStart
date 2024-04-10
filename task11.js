function handleFormSubmit(event)
{     
      event.preventDefault();
      const name = event.target.username.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;

      const myObj = {

        username : name,
        email : email,
        phone : phone
      }

      const list = document.querySelector('ul');
      

      const newLi = document.createElement('li');
      newLi.innerHTML = name + '-' + email + '-' + phone;
      list.appendChild(newLi);

      const userList = document.querySelector('ul');

      const deleteBtn = document.createElement('button');
      const deleteBtnText = document.createTextNode('delete');
      deleteBtn.appendChild(deleteBtnText);
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = (event) =>{
        if(event.target.classList.contains('delete-btn'))
        {
            
         const userToDelete = event.target.parentElement;
         localStorage.removeItem(myObj.email);
         userList.removeChild(userToDelete);
           
   
        }
      }
      newLi.appendChild(deleteBtn);


      

      
      const myobj_ster = JSON.stringify(myObj);

      localStorage.setItem(myObj.email,myobj_ster);

}