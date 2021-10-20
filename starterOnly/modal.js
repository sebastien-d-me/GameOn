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
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let location1 = document.getElementById("location1");
  let location2 = document.getElementById("location2");
  let location3 = document.getElementById("location3");
  let location4 = document.getElementById("location4");
  let location5 = document.getElementById("location5");
  let location6 = document.getElementById("location6");
  let checkbox1 = document.getElementById("checkbox1");

  // check form data errors
  let nbError = 0;

  // check first name
  if(first.length != 0) {
    document.getElementById("msg-first").setAttribute("data-error-visible", false);
    document.getElementById("msg-first").setAttribute("data-error", "");
    if(first.length < 2) {
      nbError = nbError + 1;
      document.getElementById("msg-first").setAttribute("data-error-visible", true);
      document.getElementById("msg-first").setAttribute("data-error", "Le champ prénom doit contenir au moins 2 caractères");
    } else {
      document.getElementById("msg-first").setAttribute("data-error-visible", false);
      document.getElementById("msg-first").setAttribute("data-error", "");
    }
  } else {
    nbError = nbError + 1;
    document.getElementById("msg-first").setAttribute("data-error-visible", true);
    document.getElementById("msg-first").setAttribute("data-error", "Le champ prénom ne doit pas être vide");
  }

  // check last name
  if(last.length != 0) {
    document.getElementById("msg-last").setAttribute("data-error-visible", false);
    document.getElementById("msg-last").setAttribute("data-error", "");
    if(last.length < 2) {
      nbError = nbError + 1;
      document.getElementById("msg-last").setAttribute("data-error-visible", true);
      document.getElementById("msg-last").setAttribute("data-error", "Le champ nom doit contenir au moins 2 caractères");
    } else {
      document.getElementById("msg-last").setAttribute("data-error-visible", false);
      document.getElementById("msg-last").setAttribute("data-error", "");
    }
  } else {
    nbError = nbError + 1;
    document.getElementById("msg-last").setAttribute("data-error-visible", true);
    document.getElementById("msg-last").setAttribute("data-error", "Le champ nom ne doit pas être vide");
  }

  // check email
  const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkEmail = testEmail.test(email);
  if(checkEmail == false) {
    nbError = nbError + 1;
    document.getElementById("msg-email").setAttribute("data-error-visible", true);
    document.getElementById("msg-email").setAttribute("data-error", "L'adresse email est invalide");
  } else {
    document.getElementById("msg-email").setAttribute("data-error-visible", false);
    document.getElementById("msg-email").setAttribute("data-error", "");
  }

  // check birthdate
  const age = (new Date(Date.now() - (new Date(birthdate)).getTime())).getFullYear() - 1970;

  if(Date.parse(birthdate)) {
    if(age > 17 && age < 101) {
      document.getElementById("msg-birthdate").setAttribute("data-error-visible", false);
      document.getElementById("msg-birthdate").setAttribute("data-error", "");
    } else {
      nbError = nbError + 1;
      document.getElementById("msg-birthdate").setAttribute("data-error-visible", true);
      document.getElementById("msg-birthdate").setAttribute("data-error", "Vous devez avoir entre 18 et 100 ans.");
    }
  } else {
    nbError = nbError + 1;
    document.getElementById("msg-birthdate").setAttribute("data-error-visible", true);
    document.getElementById("msg-birthdate").setAttribute("data-error", "Le champ date de naissance n'est pas valide");
  }

  // check quantity
  if(quantity.length > 0) {
    document.getElementById("msg-quantity").setAttribute("data-error-visible", false);
    document.getElementById("msg-quantity").setAttribute("data-error", "");
    if(isNaN(quantity)){
      nbError = nbError + 1;
      document.getElementById("msg-quantity").setAttribute("data-error-visible", true);
      document.getElementById("msg-quantity").setAttribute("data-error", "Le nombre de tournoi doit être un nombre");
    } else {
      document.getElementById("msg-quantity").setAttribute("data-error-visible", false);
      document.getElementById("msg-quantity").setAttribute("data-error", "");
    }
  } else {
    nbError = nbError + 1;
    document.getElementById("msg-quantity").setAttribute("data-error-visible", true);
    document.getElementById("msg-quantity").setAttribute("data-error", "Le nombre de tournoi où vous avez déjà participé ne doit pas être vide");
  }

  // check location
  if(!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    nbError = nbError + 1;
    document.getElementById("msg-location").setAttribute("data-error-visible", true);
    document.getElementById("msg-location").setAttribute("data-error", "Vous devez cocher une ville");
  } else {
    document.getElementById("msg-location").setAttribute("data-error-visible", false);
    document.getElementById("msg-location").setAttribute("data-error", "");
  }

  // check checkbox
  if(!checkbox1.checked) {
    nbError = nbError + 1;
    document.getElementById("msg-checkbox").setAttribute("data-error-visible", true);
    document.getElementById("msg-checkbox").setAttribute("data-error", "Vous devez accepter les conditions d'utilisation");
  } else {
    document.getElementById("msg-checkbox").setAttribute("data-error-visible", false);
    document.getElementById("msg-checkbox").setAttribute("data-error", "");
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