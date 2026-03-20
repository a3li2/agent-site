// MATRIX EFFECT
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "NKD SYRIA 010101";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);

// TERMINAL
const log = document.getElementById("log");

let lines = [
  "NKD SYRIA BREACH...",
  "ACCESSING TARGET...",
  "INJECTING...",
  "OVERRIDE SUCCESS...",
  "SYSTEM OWNED"
];

let i = 0;

function type() {
  if (i < lines.length) {
    log.innerHTML += "> " + lines[i] + "<br>";
    i++;
    setTimeout(type, 500);
  }
}

type();

// CPU
setInterval(() => {
  document.getElementById("cpu").innerText =
    Math.floor(Math.random() * 40 + 60) + "%";
}, 800);

// زر
function run() {
  alert("NKD SYRIA ATTACK INITIATED ☠️");
}
