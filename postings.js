let signOut=document.querySelector("#signOut")

signOut.addEventListener("click", ()=> {
    firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});
})

function getPostings(){
    firebase.database().ref('/').once('value',(snapshot)=>{
        let user=snapshot.val()
        let displayPostings=document.querySelector('#postings')
       
        for(key in user) {
            let post = user[key].posts
            console.log(post)
            for(moreKeys in post)
           displayPostings.innerHTML += `
            <div class="card " id="postings">
  <img class="card-img-top" height="40%" width="40%" src="${post[moreKeys].image}" alt="Card image cap">
  <div class="card-body">
  <h7 class="card-title"><a href="postings.html">${user[key].email}</a></h7>
    <h2 class="card-title">${post[moreKeys].name}</h2>
    <h5 class="card-text" id="description">${post[moreKeys].description}</h5>
        <p><button class="numbro"><i class="fas fa-mobile-alt"></i> ${post[moreKeys].phone}</button></p>
   
  </div>` 
        } 
    }
    )
}

window.onload= getPostings()