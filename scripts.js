const password = document.querySelector('#password');
const checkPsw = document.querySelector('#checkPsw');
const lowerReq = document.getElementById("lowerReq");
const upperReq = document.getElementById("upperReq");
const specialReq = document.getElementById("specialReq");
const pswReqText = document.getElementById('pswReq');
const charLen = document.getElementById('charLen');
const pswMatch = document.getElementById('pswMatch');
const form = document.getElementsByTagName('form')[0];

password.addEventListener('input', () => {
  // Add styling to highlight password requirements that have been met
  // ↓ Ternary Operators Used ↓
  (/[a-z]/.test(password.value)) ? 
    lowerReq.style.cssText = "background-color: green; color: white" : 
    lowerReq.style.cssText = "background-color: none; color: black";
  
  (/[A-Z]/.test(password.value)) ?
    upperReq.style.cssText = "background-color: green; color: white" :
    upperReq.style.cssText = "background-color: none; color: black";
  
  (/[^a-zA-Z]/.test(password.value)) ?
    specialReq.style.cssText = "background-color: green; color: white" :
    specialReq.style.cssText = "background-color: none; color: black";

  (password.value.length >= 8 && password.value.length <= 20)  ?
    charLen.style.cssText = "background-color: green; color: white" :
    charLen.style.cssText = "background-color: none; color: black";
})

checkPsw.addEventListener('input', () => {
  if(checkPsw.value != password.value) {
    pswMatch.innerText = "*Passwords do not Match";
    pswMatch.style.cssText = "color: red";
  } else {
    pswMatch.innerText = "Passwords Match ✔️";
    pswMatch.style.cssText = "color: green";
  }
})

form.addEventListener('submit', function (e) {
  if(checkPsw.value != password.value) {
    checkPsw.setCustomValidity("Passwords Must to Match!");
    e.preventDefault();
  }
});
