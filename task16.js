function handleFormSubmit(event) {

    const userItem = document.createElement("li");
    userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
      );
    
     const deleteBtn = document.createElement("button");
     deleteBtn.appendChild(document.createTextNode("Delete"));
     userItem.appendChild(deleteBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
    
    axios.delete("https://crudcrud.com/api/2fdcf6bc7a094362a269c2f3b31a826f/appointmentData/6660b50319f3e403e81e2248")
         .then((response)=>{userList.removeChild(event.target.parentElement);})
         .catch((err)=>{console.log(err);})
  });
  }