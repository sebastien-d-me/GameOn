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

// remove error
function removeError(idElem) {
  document.getElementById(idElem).setAttribute("data-error-visible", false);
  document.getElementById(idElem).setAttribute("data-error", "");
}

// show error
function showError(idElem, msgError) {
  document.getElementById(idElem).setAttribute("data-error-visible", true);
  document.getElementById(idElem).setAttribute("data-error", msgError);
}

// check location | If one is checked return true, if none of them return false
function checkLocation() {
  let locationChecked = false;
  const location = document.getElementsByName("location");
  location.forEach(function(verifLocation) {
    if(verifLocation.checked) {
      locationChecked = true;
    }
  });
  if(locationChecked == true) {
    return true;
  } else {
    return false;
  }
}

// validate the form
function validate(event) {
  // prevent form submit
  event.preventDefault();

  // get DOM Elements
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let checkbox1 = document.getElementById("checkbox1");

  // check form data errors
  let nbError = 0;

  // check first name
  if(first.length != 0) {
    removeError("msg-first");
    if(first.length < 2) {
      nbError = nbError + 1;
      showError("msg-first", "Le champ prénom doit contenir au moins 2 caractères");
    } else {
      removeError("msg-first");
    }
  } else {
    nbError = nbError + 1;
    showError("msg-first", "Le champ prénom ne doit pas être vide");
  }

  // check last name
  if(last.length != 0) {
    removeError("msg-last");
    if(last.length < 2) {
      nbError = nbError + 1;
      showError("msg-last", "Le champ nom doit contenir au moins 2 caractères");
    } else {
      removeError("msg-last");
    }
  } else {
    nbError = nbError + 1;
    showError("msg-last", "Le champ nom ne doit pas être vide");
  }

  // check email
  const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkEmail = testEmail.test(email);
  if(checkEmail == false) {
    nbError = nbError + 1;
    showError("msg-email", "L'adresse email est invalide");
  } else {
    removeError("msg-email");
  }

  // check birthdate
  const age = (new Date(Date.now() - (new Date(birthdate)).getTime())).getFullYear() - 1970;
  if(Date.parse(birthdate)) {
    if(age > 17 && age < 101) {
      removeError("msg-birthdate");
    } else {
      nbError = nbError + 1;
      showError("msg-birthdate", "Vous devez avoir entre 18 et 100 ans");
    }
  } else {
    nbError = nbError + 1;
    showError("msg-birthdate", "Le champ date de naissance n'est pas valide");
  }

  // check quantity
  if(quantity.length > 0) {
    removeError("msg-quantity");
    if(isNaN(quantity)){
      nbError = nbError + 1;
      showError("msg-quantity", "Le nombre de tournoi doit être un nombre");
    } else {
      removeError("msg-quantity");
    }
  } else {
    nbError = nbError + 1;
    showError("msg-quantity", "Le nombre de tournoi où vous avez déjà participé ne doit pas être vide");
  }

  // check location
  var locationChecked = checkLocation();
  if(locationChecked == false) {
    nbError = nbError + 1;
    showError("msg-location", "Vous devez cocher une ville");
  } else {
    removeError("msg-location");
  }

  // check checkbox
  if(!checkbox1.checked) {
    nbError = nbError + 1;
    showError("msg-checkbox", "Vous devez accepter les conditions d'utilisation");
  } else {
    removeError("msg-checkbox");
  }
   
  // check if there is 0 errors
  if(nbError == 0) {
    document.getElementById("reserve").style.display = "none";
    document.getElementById("thank").style.display = "flex";
  }
}

// close the confirmation modal
function closeConfirm() {
  document.getElementById("thank").style.display = "none";
  // send the form
  document.getElementById("form").submit();
}