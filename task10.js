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
      
       // const myobj_ster = JSON.stringify(myObj);

      localStorage.setItem(myObj.email,JSON.stringify(myObj));
     

  
       const list = document.querySelector('ul');
      

      const newLi = document.createElement('li');
      newLi.innerHTML = name + '-' + email + '-' + phone;
      

      list.appendChild(newLi);

}
