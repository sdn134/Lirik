

const lirik = [
  "Sakit rasanya putus cinta",
  "Sesaknya di dada",
  "Membuat kita jadi gegana",
  "Gelisah, galau, merana",
  "Mendingan kita happy aja",
  "Lupakan semua",
  "Marilah kita goyang bersama",
  "Goyang Dumang namanya",
  "",
  "Ayo goyang dumang, biar hati senang",
  "Pikiran pun tenang, galau jadi hilang",
  "Ayo goyang dumang, biar hati senang",
  "Semua masalah jadi hilang",
  "Ayo goyang dumang, biar hati senang",
  "Pikiran pun tenang, galau jadi hilang",
  "Ayo goyang dumang, biar hati senang",
  "Semua masalah jadi hilang",
  "",
  "Ayo goyang dumang",
  "Ayo goyang dumang",
  "Ayo goyang dumang",
  "Ayo goyang dumang",
  "",
  "Sakit rasanya putus cinta",
  "Sesaknya di dada",
  "Membuat kita jadi gegana",
  "Gelisah, galau, merana",
  "Mendingan kita happy aja",
  "Lupakan semua",
  "Marilah kita goyang bersama",
  "Goyang Dumang namanya",
  "",
  "Ayo goyang dumang, biar hati senang",
  "Pikiran pun tenang, galau jadi hilang",
  "Ayo goyang dumang, biar hati senang",
  "Semua masalah jadi hilang",
  "Ayo goyang dumang, biar hati senang",
  "Pikiran pun tenang, galau jadi hilang",
  "Ayo goyang dumang, biar hati senang",
  "Semua masalah jadi hilang"
];

const container = document.getElementById("lyrics");
let lineIndex = 0;

function showLine() {
  if (lineIndex >= lirik.length) return;
  container.innerHTML = ""; 
  const line = lirik[lineIndex];
  [...line].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.className = "char";
    span.style.animationDelay = `${i * 0.1}s`; 
    container.appendChild(span);
  });
  lineIndex++;
  setTimeout(showLine, 4000); // ganti baris tiap 4 detik
}

window