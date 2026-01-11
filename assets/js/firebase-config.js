// Arquivo: assets/js/firebase-config.js

// 1. Importa apenas o necessário do CDN do Google
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged, 
    signOut, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 2. Suas Credenciais (Centralizadas aqui)
const firebaseConfig = {
  apiKey: "AIzaSyBeYI4mBreTpAdTSD-njz2evEG2FYSx-sE",
  authDomain: "mmbrepresentacoes-e2371.firebaseapp.com",
  projectId: "mmbrepresentacoes-e2371",
  storageBucket: "mmbrepresentacoes-e2371.firebasestorage.app",
  messagingSenderId: "86673676966",
  appId: "1:86673676966:web:f851f535fa58d13b943267",
  measurementId: "G-DHVKHL4YTW"
};

// 3. Inicializa o App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. Exporta para os outros arquivos usarem
export { auth, onAuthStateChanged, signOut, signInWithEmailAndPassword };