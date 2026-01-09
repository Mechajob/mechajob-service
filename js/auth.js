import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* Proteksi halaman */
onAuthStateChanged(auth, (user) => {
  if (!user) window.location.href = "login.html";
});

/* Logout delegation */
document.addEventListener("click", (e) => {
  if (e.target.closest("#logoutBtn")) {
    if (confirm("Yakin ingin logout?")) {
      signOut(auth).then(() => {
        window.location.href = "login.html";
      });
    }
  }
});