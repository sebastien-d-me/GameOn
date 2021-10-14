function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBtnClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalBtnClose.forEach((btnClose) => btnClose.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate the form
function validate(event) {
  // prevent form submit
  event.preventDefault();

  // get DOM Elements
  let first = event.target['first'].value;
  let last = event.target['last'].value;
  let email = event.target['email'].value;
  let birthdate = event.target['birthdate'].value;
  let quantity = event.target['quantity'].value;
  let location1 = document.getElementById('location1');
  let location2 = document.getElementById('location2');
  let location3 = document.getElementById('location3');
  let location4 = document.getElementById('location4');
  let location5 = document.getElementById('location5');
  let location6 = document.getElementById('location6');
  let checkbox1 = document.getElementById('checkbox1');
  let checkbox2 = document.getElementById('checkbox2');


  // check form data
  let errorForm = false;
  let errorFirst = [];
  let errorLast = [];
  let errorEmail = [];
  let errorQuantity = [];
  let errorLocation = [];
  let errorCheckbox = [];

  // check first name and last name
  switch(true) {
    // check first name
    case first.length == 0: {
      errorFirst.push("Le champ prénom ne doit pas être vide");
      errorForm = true;
      break;
    }
    case first.length < 2: {
      errorFirst.push("Le champ prénom doit contenir au moins 2 caractères");
      errorForm = true;
      break;
    }
    // check last name
    case last.length == 0: {
      errorLast.push("Le champ nom ne doit pas être vide");
      errorForm = true;
      break;
    }
    case last.length < 2: {
      errorLast.push("Le champ nom doit contenir au moins 2 caractères");
      errorForm = true;
      break;
    }
    default:
      break;
  }

  // check email
  const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkEmail = testEmail.test(email);
  if(checkEmail == false) {
    errorEmail.push("L'adresse email est invalide");
    errorForm = true;
  }

  // check quantity
  if(quantity.length > 0) {
    if(isNaN(quantity)){
      errorQuantity.push("Le nombre de tournoi doit être un nombre");
      errorForm = true;
    }
  } else {
    errorQuantity.push("Le nombre de tournoi où vous avez déjà participé ne doit pas être vide");
    errorForm = true;
  }

  // check location
  if(!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    errorLocation.push("Vous devez cocher au moins une ville");
    errorForm = true;
  }

  // check checkbox
  if(!checkbox1.checked) {
    errorCheckbox.push("Vous devez accepter les conditions d'utilisation");
    errorForm = true;
  }
   
  // send the form if there is 0 errors
  if(errorForm === false) {
    document.getElementById("form").submit();
  }
}