/* REFLEKSI XI RPL - 50 SOAL - 30 MENIT */
"use strict";

const TOTAL_QUESTIONS = 50;
const EXAM_DURATION = 30 * 60;
const GOOGLE_SHEETS_WEB_APP_URL = "TEMPEL_URL_WEB_APP_APPS_SCRIPT_DI_SINI";
const EXAM_ID = "REFLEKSI-XI-RPL-50-SOAL";

let currentQuestion = 0;
let answers = Array(TOTAL_QUESTIONS).fill(null);
let remainingTime = EXAM_DURATION;
let timerInterval = null;
let finished = false;
let student = {};
let startedAt = null;
const letters = ["A","B","C","D"];
const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  const requiredIds = ["identityForm","startBtn","welcome","exam","result"];
  const missing = requiredIds.filter(id => !$(id));
  if (missing.length) {
    console.error("Elemen HTML tidak ditemukan:", missing);
    alert("Komponen halaman tidak lengkap. Periksa index.html.");
    return;
  }
  if (!Array.isArray(window.QUESTIONS) || QUESTIONS.length !== TOTAL_QUESTIONS) {
    $("startError").textContent = "Bank soal belum berhasil dimuat. Pastikan questions.js berada satu folder dan dimuat sebelum script.js.";
    $("startBtn").disabled = true;
    return;
  }
  $("identityForm").addEventListener("submit", startExam);
  $("prevBtn").addEventListener("click", previousQuestion);
  $("nextBtn").addEventListener("click", nextQuestion);
  $("finishBtn").addEventListener("click", () => finishExam(false));
  $("reviewBtn").addEventListener("click", toggleReview);
  $("printBtn").addEventListener("click", () => window.print());
  $("homeBtn").addEventListener("click", () => {
    if (confirm("Kembali ke halaman awal? Hasil yang sudah dikirim tetap tersimpan.")) location.reload();
  });
});

function startExam(event) {
  event.preventDefault();
  $("startError").textContent = "";
  const name = $("studentName").value.trim();
  const className = $("studentClass").value.trim();
  const number = $("studentNumber").value.trim();
  if (!name || !className || !number) {
    $("startError").textContent = "Lengkapi nama, kelas, dan nomor absen terlebih dahulu.";
    return;
  }
  if (!Number.isInteger(Number(number)) || Number(number) < 1) {
    $("startError").textContent = "Nomor absen harus berupa angka positif.";
    return;
  }
  if (QUESTIONS.length !== TOTAL_QUESTIONS || !QUESTIONS.every(q =>
    q.options && q.options.length === 4 && letters.includes(q.answer) &&
    ["WORD","EXCEL","DATABASE"].includes(q.section))) {
    $("startError").textContent = "Bank soal tidak valid. Periksa questions.js.";
    return;
  }

  student = { name, className, number };
  startedAt = Date.now();
  currentQuestion = 0;
  answers = Array(TOTAL_QUESTIONS).fill(null);
  remainingTime = EXAM_DURATION;
  finished = false;
  $("studentInfo").textContent = `${name} | ${className} | Absen ${number}`;
  $("welcome").classList.add("hidden");
  $("result").classList.add("hidden");
  $("exam").classList.remove("hidden");
  renderQuestion();
  renderNavigation();
  updateProgress();
  startTimer();
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  $("sectionTitle") && ($("sectionTitle").textContent = q.section);
  $("sectionPill").textContent = q.section === "WORD" ? "MICROSOFT WORD" :
    q.section === "EXCEL" ? "MICROSOFT EXCEL" : "BASIS DATA";
  $("levelPill").textContent = q.level;
  $("questionNumber").textContent = String(currentQuestion + 1).padStart(2,"0");
  $("questionText").textContent = q.question;
  const options = $("options");
  options.replaceChildren();
  q.options.forEach((option,index) => {
    const letter = letters[index];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option" + (answers[currentQuestion] === letter ? " selected" : "");
    button.setAttribute("aria-pressed", String(answers[currentQuestion] === letter));
    const key = document.createElement("span");
    key.className = "option-key";
    key.textContent = letter;
    const text = document.createElement("span");
    text.textContent = option;
    button.append(key,text);
    button.addEventListener("click", () => {
      if (finished) return;
      answers[currentQuestion] = letter;
      renderQuestion();
      renderNavigation();
      updateProgress();
    });
    options.appendChild(button);
  });
  $("prevBtn").disabled = currentQuestion === 0;
  $("nextBtn").textContent = currentQuestion === TOTAL_QUESTIONS - 1 ? "KEMBALI KE SOAL 1 ↺" : "SELANJUTNYA →";
}

function renderNavigation() {
  const grid = $("numberGrid");
  grid.replaceChildren();
  QUESTIONS.forEach((q,index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "number-btn";
    if (answers[index] !== null) button.classList.add("done");
    if (currentQuestion === index) button.classList.add("current");
    button.textContent = index + 1;
    button.setAttribute("aria-label", `Soal ${index+1}`);
    button.addEventListener("click", () => {
      if (finished) return;
      currentQuestion = index;
      renderQuestion();
      renderNavigation();
      updateProgress();
    });
    grid.appendChild(button);
  });
}
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(); renderNavigation(); updateProgress();
  }
}
function nextQuestion() {
  currentQuestion = currentQuestion < TOTAL_QUESTIONS - 1 ? currentQuestion + 1 : 0;
  renderQuestion(); renderNavigation(); updateProgress();
}
function updateProgress() {
  const answered = answers.filter(a => a !== null).length;
  $("progressText").textContent = `SOAL ${currentQuestion+1} DARI ${TOTAL_QUESTIONS}`;
  $("answeredText").textContent = `${answered}/${TOTAL_QUESTIONS} TERJAWAB`;
  $("progressBar").style.width = `${answered / TOTAL_QUESTIONS * 100}%`;
}
function startTimer() {
  clearInterval(timerInterval);
  updateTimer();
  timerInterval = setInterval(() => {
    if (finished) return;
    remainingTime = Math.max(0, remainingTime - 1);
    updateTimer();
    if (remainingTime === 600) alert("Perhatian! Waktu tersisa 10 menit.");
    if (remainingTime === 300) alert("Perhatian! Waktu tersisa 5 menit.");
    if (remainingTime <= 0) finishExam(true);
  },1000);
}
function updateTimer() {
  const min = Math.floor(remainingTime/60);
  const sec = remainingTime%60;
  $("timer").textContent = `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
  $("timer").style.color = remainingTime <= 300 ? "#ff5968" : "#fff";
}
function finishExam(timeUp=false) {
  if (finished) return;
  const blank = answers.filter(a => a === null).length;
  if (!timeUp && !confirm(`Masih ada ${blank} soal belum dijawab. Yakin menyelesaikan refleksi?`)) return;
  finished = true;
  clearInterval(timerInterval);
  calculateResult(timeUp);
}
function calculateResult(timeUp) {
  let correct=0, wordCorrect=0, excelCorrect=0, databaseCorrect=0;
  QUESTIONS.forEach((q,i) => {
    if (answers[i] === q.answer) {
      correct++;
      if (q.section === "WORD") wordCorrect++;
      if (q.section === "EXCEL") excelCorrect++;
      if (q.section === "DATABASE") databaseCorrect++;
    }
  });
  const blank = answers.filter(a => a === null).length;
  const wrong = TOTAL_QUESTIONS - correct - blank;
  const score = Math.round(correct / TOTAL_QUESTIONS * 100);
  const category = score>=90 ? "EXCELLENT" : score>=80 ? "VERY GOOD" :
    score>=70 ? "GOOD" : score>=60 ? "NEED IMPROVEMENT" : "KEEP LEARNING";

  $("score").textContent = score;
  $("category").textContent = category;
  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;
  $("blankCount").textContent = blank;
  $("resultGreeting").textContent = `${student.name} | ${student.className} | Absen ${student.number}` + (timeUp ? " | WAKTU HABIS" : "");
  $("exam").classList.add("hidden");
  $("result").classList.remove("hidden");
  buildReview();

  const payload = {
    action:"saveResult",
    submissionId:`${EXAM_ID}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
    examId:EXAM_ID,
    student,
    result:{
      wordCorrect,excelCorrect,databaseCorrect,correct,wrong,blank,score,category,
      durationSeconds:Math.round((Date.now()-startedAt)/1000),
      status:timeUp ? "WAKTU HABIS" : "SELESAI"
    },
    answers:QUESTIONS.map((q,i)=>({
      questionNumber:i+1,section:q.section,level:q.level,question:q.question,
      studentAnswer:answers[i] || "",correctAnswer:q.answer,
      isCorrect:answers[i] === q.answer
    }))
  };
  saveResultToGoogleSheets(payload);
  window.scrollTo({top:0,behavior:"smooth"});
}
function buildReview() {
  const list = $("reviewList");
  list.replaceChildren();
  QUESTIONS.forEach((q,index) => {
    const item=document.createElement("div"); item.className="review-item";
    const heading=document.createElement("h3"); heading.textContent=`${index+1}. [${q.section} • ${q.level}] ${q.question}`;
    const userAnswer=answers[index];
    const answer=document.createElement("p");
    const correct=userAnswer===q.answer;
    answer.className=correct?"correct-answer":"wrong-answer";
    answer.textContent=`Jawaban Anda: ${userAnswer ? userAnswer+". "+q.options[letters.indexOf(userAnswer)] : "Tidak dijawab"}`;
    const key=document.createElement("p"); key.className="correct-answer";
    key.textContent=`Kunci Jawaban: ${q.answer}. ${q.options[letters.indexOf(q.answer)]}`;
    const explanation=document.createElement("p"); explanation.textContent="Pembahasan: "+q.explanation;
    item.append(heading,answer,key,explanation); list.appendChild(item);
  });
}
function toggleReview() {
  $("review").classList.toggle("hidden");
  const open=!$("review").classList.contains("hidden");
  $("reviewBtn").textContent=open?"TUTUP PEMBAHASAN":"LIHAT PEMBAHASAN";
  if(open) $("review").scrollIntoView({behavior:"smooth",block:"start"});
}
async function saveResultToGoogleSheets(payload) {
  const status=$("saveStatus");
  if(!GOOGLE_SHEETS_WEB_APP_URL || GOOGLE_SHEETS_WEB_APP_URL.includes("TEMPEL_URL")) {
    status.textContent="Google Sheets belum terhubung. Isi URL Web App pada script.js.";
    status.style.color="#ff858b";
    return;
  }
  status.textContent="Mengirim hasil ke Google Sheets...";
  try {
    // no-cors membuat browser tidak dapat membaca balasan server.
    // Status ini berarti request dikirim; verifikasi data pada spreadsheet.
    await fetch(GOOGLE_SHEETS_WEB_APP_URL,{
      method:"POST",mode:"no-cors",
      headers:{"Content-Type":"text/plain;charset=utf-8"},
      body:JSON.stringify(payload)
    });
    status.textContent="Permintaan penyimpanan telah dikirim. Periksa tab RESULTS dan ANSWERS di Google Sheets.";
    status.style.color="#65d9a7";
  } catch(error) {
    console.error(error);
    status.textContent="Pengiriman gagal. Periksa koneksi internet dan URL Apps Script.";
    status.style.color="#ff858b";
  }
}
