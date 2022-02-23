 const helpMsgName = document.querySelector('.help-name')
 const helpMsgEmail = document.querySelector('.help-email')
 const helpMsgMessage = document.querySelector('.help-message')
 const form = document.querySelector('#contact-form');
 let name = document.getElementById('name')
 let email = document.getElementById('email')
 let message = document.getElementById('message')

//  const errors = {};


//  const validateName = (e) => {
//      if (e.target.value.length >= 5) {
//          errors[e.target.name] = false;
//          helpMsgName.textContent = "";
//          const nameInput = document.querySelector('.name');
//          nameInput.classList.add('verify')

//      } else {
//          errors[e.target.name] = true;
//          helpMsgName.textContent = "Musisz wpisać więcej niż 5 znaków..."
//      }
//  }


//  const validateEmail = (e) => {
//      if (e.target.value.length >= 5 && e.target.value.includes('@')) {
//          errors[e.target.name] = false;
//          helpMsgEmail.textContent = "";
//          const emailInput = document.querySelector('.email');
//          emailInput.classList.add('verify');
//      } else {
//          errors[e.target.name] = true;
//          helpMsgEmail.textContent = "Email powinien zawierać @ oraz minimum 5 znaków..."
//      }
//  }




//  const validateMessage = (e) => {
//      if (e.target.value.trim().length >= 15) {
//          errors[e.target.name] = false;
//          helpMsgMessage.textContent = "";
//      } else {
//          errors[e.target.name] = true;
//          helpMsgMessage.textContent = "Wiadomość powinna zawierać więcej niż 15 znaków..."
//      }
//  }





//  const validateForm = (e) => {
//      e.preventDefault()
//      const errorValues = Object.values(errors);
//      if (errorValues.indexOf(true) > -1) {
//          return
//      } else {
//          name = name.value;
//          email = email.value;
//          message = message.value;
//          form.submit(function (e) {
//              e.preventDefault();
//          });
//      }
//  }



 export {
     validateName,
     validateEmail,
     validateMessage,
     validateForm,
 };