let password = document.querySelector("#password")
let passwordConf = document.querySelector("#password2")
let email = document.querySelector("#email")
let button = document.querySelector("#buttonSignUp")
let status = document.querySelector(".checkbox")

button.addEventListener("click", (e) => {

    console.log(password.value)
    console.log(email.value)
  

    if (password.value != passwordConf.value) {
        window.alert("passwords must match");
    }
    else {
        registerUser(email.value, password.value)
        checkBoxes()
 

       
       
    }
})

function registerUser(email, password) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
   
}

function checkBoxes() {
    var checkbox
    let checkbox1= document.querySelector("#teacherBox")
    let checkbox2= document.querySelector("#studentBox")
    if (checkbox1.checked== true) {
     checkbox="teacher"
     addUserToDatabase()
     window.location='teacherInfo.html'
     
    }
    else if (checkbox2.checked==true) {
        checkbox="student"
         addUserToDatabase()
    }
    
     
   
}
function addUserToDatabase() {
  var user = firebase.auth().currentUser;
  console.log(user)
var email;

if (user != null) {
  
  email = user.email;
  let accountType = status.value; 
 

     user = {
    email: email,
    account: accountType
} 

console.log(user) 
firebase.database().ref('/').push(user) } }





