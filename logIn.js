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
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
   window.location='teacherInfo.html';
}, function(error) {
  console.error('Sign Out Error', error);
})
 
 

