import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

 
  // var form = document.createElement("form");
  // form.setAttribute("method", "post");
  // form.setAttribute("action", "");
  

  // var cardName = document.createElement("input");
  // cardName.type = "text";
  // cardName.className = "ccname"; 
  // form.appendChild(cardName); 

  // var cardNumber = document.createElement("input");
  // cardNumber.type = "text";
  // cardNumber.className = "cardnumber"; 
  // form.appendChild(cardNumber); 

  // var cardCVC = document.createElement("input");
  // cardCVC.type = "text";
  // cardCVC.className = "cardnumber"; 
  // form.appendChild(cardCVC); 

  // var cardExpiry = document.createElement("input");
  // cardExpiry.type = "text";
  // cardExpiry.className = "cc-exp"; 
  // form.appendChild(cardExpiry); 

  // document.getElementsByTagName("body")[0]
  //              .appendChild(form);
});

// Check if input.name exists
// let cardName = document.querySelector('input[name="ccname"]');
// let cardNumber = document.querySelector('input[name="cardnumber"]');
// let cardCVC = document.querySelector('input[name="cvc"]');
// let cardExpiry = document.querySelector('input[name="cc-exp"]');


