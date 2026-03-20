const log = document.getElementById("log");

let lines = [
  "NKD SYRIA Booting...",
  "Connecting...",
  "Access Granted...",
  "Loading Nodes...",
  "NKD SYRIA ACTIVE"
];

let i = 0;

function write() {
  if (i < lines.length) {
    log.innerHTML += "> " + lines[i] + "<br>";
    i++;
    setTimeout(write, 700);
  }
}

write();

function run() {
  alert("NKD SYRIA EXECUTED ⚡");
}

setInterval(() => {
  document.getElementById("cpu").innerText =
    Math.floor(Math.random() * 40 + 60) + "%";
}, 1000);
