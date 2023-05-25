const firebaseConfig = {
    apiKey: "AIzaSyD5XuzUpgjlG3aWghyTo9xmqU66mPXDSnI",
    authDomain: "kwitterapplication-b437c.firebaseapp.com",
    projectId: "kwitterapplication-b437c",
    storageBucket: "kwitterapplication-b437c.appspot.com",
    messagingSenderId: "640546554503",
    appId: "1:640546554503:web:40079e6c98ffdc9265ee22"
  };

  function adduser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/") .child(user_name).update({
        purpose: "adding user"
    });
  }