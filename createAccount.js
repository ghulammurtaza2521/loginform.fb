import { auth, db } from "./firebase.mjs";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


var createAccountButton = document.getElementById('Register')

createAccountButton.addEventListener('click', () => {

    console.log('Okay Hai Sir');

    var userName = document.getElementById('name').value
    var fatherName = document.getElementById('fname').value
    var age = document.getElementById('age').value
    var mNumber = document.getElementById('number').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cnic = document.getElementById('cnic').value
    // var gender = document.getElementById('rma')
    // var gender = document.getElementById('rfm')
    // for (var i = 0; i < gender.length; i++) {
    //     if (gender[i].checked) {
    //         console.log(gender[i].value);
    //     }
    // }

    console.log(email, password);
    

    let userData = {
        userName: userName,
        fatherName: fatherName,
        age: age,
        mNumber: mNumber,
        email: email,
        password: password,
        cnic:cnic
        // gender: gender,
        
    }

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
  .then(async(userCredential) => {

    // Signed up 
    const user = userCredential.user;

    try {
      const docRef = await addDoc(collection(db, "New Form"), {
        ...userData,
        uid:user.uid
      });
      alert('data submit')
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(userData);

    sendEmailVerification(auth.currentUser)
  .then(() => {
    alert('plz Email verifed')
  });
    window.location.href='index.html'
    console.log('user===>',user);
    alert('Well come')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log('errorCode===>',errorCode);
    console.log('errorMassage===>',errorMessage);
  });

})




















    //     createUserWithEmailAndPassword(auth, userData.email, userData.password)
//         .then(async (userCredential) => {
//             // Signed up 
//             const user = userCredential.user;

//             try {
//                 const docRef = await addDoc(collection(db, "form"), {
//                     ...userData,
//                     uid: user.uid
//                 });
//                 console.log("Document written with ID: ", docRef.id);
//             } catch (e) {
//                 console.error("Error adding document: ", e);
//             }

//             sendEmailVerification(auth.currentUser)
//                 .then(() => {
//                     alert('plz Email verifed')
//                 });
//             window.location.href = 'index.html'
//             console.log('user===>', user);
//             alert('Well come')
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//             console.log('errorCode===>', errorCode);
//             console.log('errorMassage===>', errorMessage);
//         });

// })