import {
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { auth } from "firebase.js";

const form = document.getElementById("login-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      localStorage.user_activee = 1;
      alert("AC");
      if (!user.emailVerified) {
        signOut(auth);
        throw { code: "Email not verified! Ngu", message: "" };
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode);
    })
    .finally(() => {
      document.querySelector(
        "#btn-container"
      ).innerHTML = `<button class="btn btn-primary w-100" type="submit">Sign In</button>`;
    });
});
