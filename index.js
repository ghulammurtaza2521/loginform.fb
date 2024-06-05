import { auth } from "./firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var loginAccountButton = document.getElementById('login')

loginAccountButton.addEventListener('click', () => {

    console.log('Okay Hai Sir');

    var userEmail = document.getElementById('email').value
    var userPass = document.getElementById('password').value

    signInWithEmailAndPassword(auth, userEmail, userPass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log('user====>', user);
            if (user.emailVerified == true) {
                alert('login')
                window.location.href = 'dashbord.html'
            }
            else {
                alert("plz Email verifed")
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('errorCode', errorCode);
            console.log('errorMassage', errorMessage);
        });
    console.log(userEmail, userPass);
})