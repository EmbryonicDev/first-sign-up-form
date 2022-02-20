const password = document.querySelector('#password');
const checkPsw = document.querySelector('#checkPwd');
const lowerReq = document.getElementById("lowerReq");
const upperReq = document.getElementById("upperReq");
const specialReq = document.getElementById("specialReq");
const pswReqText = document.getElementById('pswReq');
const charLen = document.getElementById('charLen');


password.addEventListener('keyup', () => {
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

    console.log(password.value)
})
