addEventListener("DOMContentLoaded", (event) => {
    axios.get("https://crudcrud.com/api/2fdcf6bc7a094362a269c2f3b31a826f/appointmentData")
    .then((response)=>{
      for(let i=0;i<response.data.length;i++)
         {
             displayUserOnScreen(response.data[i]);
         }
    })
    .catch((err)=>{console.log(err)});
});

function handleFormSubmit(event) {

}

// Do not touch the code below
module.exports = handleFormSubmit;