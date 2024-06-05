import { auth } from "./firebase.mjs";
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
      alert('well come To Dashboard')
    } else {
      // User is signed out
      // ...
      window.location.href='index.html'
    }
  });

var buttonLogout = document.getElementById('logout')

buttonLogout.addEventListener('click', ()=>{

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
})


