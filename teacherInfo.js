
let selectedFile=document.querySelector("#file")
let submitButton=document.querySelector("#post")
let file;

selectedFile.addEventListener("change", e=> {
    file=e.target.files[0]
    console.log(file)
})
submitButton.addEventListener("click", e=> {
    e.preventDefault()
    console.log("button clicked")
    postImage()
    
    
    
    
})






    
    
    // File or Blob named mountains.jpg


// Create the file metadata

function postImage() {
    let fileName=file.name
    let uploadTask= firebase.storage().ref('/'+fileName).put(file)
// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    let image= downloadURL
    let name=document.querySelector("#name").value
    let description=document.querySelector("#description").value
    let phone=document.querySelector("#number").value
    let plat=document.querySelector("#platforms")
     let type = plat.options[plat.selectedIndex].value;
    console.log(type)
    
    let post=  {
        image: image,
        name:name,
        description:description,
        phone:phone,
        type: type
    }
        console.log(post)
          firebase.database().ref('/').once('value', (snapshot)=>{
      let user = snapshot.val()
      console.log(user)
      var me = firebase.auth().currentUser
      var email = me.email
      for (key in user){
          if(user[key].email == email){
              console.log('hey')
              firebase.database().ref('/'+key).child('posts').push(post)
          }
      }
  })
});
  });
  

}

