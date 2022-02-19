const password = document.querySelector('#password');
const checkPwd = document.querySelector('#checkPwd');
const lowerReq = document.getElementById("lowerReq");
const upperReq = document.getElementById("upperReq");
const specialReq = document.getElementById("specialReq");
const pswReq = document.getElementById('pswReq');
const charLen = document.getElementById('charLen');

password.addEventListener('keyup', () => {
  if(/[a-z]/.test(password.value)) {
    console.log("Lower ✓")
    lowerReq.style.cssText = "background-color: green; color: white" ;
  } else {
    lowerReq.style.cssText = "background-color: none; color: black" ;
  }
  if(/[A-Z]/.test(password.value)) {
    console.log("Upper ✓")
    upperReq.style.cssText = "background-color: green; color: white" ;
  } else {
    upperReq.style.cssText = "background-color: none; color: black" ;
  }
  if(/[^a-zA-Z]/.test(password.value)) {
    console.log("Special ✓")
    specialReq.style.cssText = "background-color: green; color: white" ;
  } else {
    specialReq.style.cssText = "background-color: none; color: black" ;
  }
  if(password.value.length >= 8 && password.value.length <= 20)  {
    console.log("Character Count ✓")
    charLen.style.cssText = "background-color: green; color: white" ;
  } else {
    charLen.style.cssText = "background-color: none; color: black" ;
  }

  console.log(password.value)

})

