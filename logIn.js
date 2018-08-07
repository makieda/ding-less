let logIn=document.querySelector("#logIn")
let email=document.querySelector("#email")
let password= document.querySelector("#password")
logIn.addEventListener("click", ()=>{
    console.log(email.value)
    console.log(password.value)
    signIn(email.value,password.value)
    console.log(firebase.auth().currentUser)


    
   
})


function signIn(email,password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message; })
  window.location="teacherInfo.html"
} 