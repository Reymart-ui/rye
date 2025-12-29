/* =======================
   TYPING NAME EFFECT
======================= */
const nameText = "Clyde";
let i = 0;
const nameSpan = document.getElementById("name");

function typeName() {
    if (i < nameText.length) {
        nameSpan.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeName, 150);
    }
}
typeName();

/* =======================
   COUNTDOWN
======================= */
const countdown = document.getElementById("countdown");
const newYear = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = newYear - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        countdown.innerHTML = `⏳ ${days}d ${hrs}h ${mins}m ${secs}s until New Year`;
    } else {
        countdown.innerHTML = "🎉 Happy New Year!";
    }
}, 1000);

/* =======================
   MOVING NO BUTTON
======================= */
const noBtn = document.getElementById("noBtn");

function moveNo() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* =======================
   YES CLICK EFFECT
======================= */
const yesBtn = document.getElementById("yesBtn");
const yesSound = document.getElementById("yesSound");

yesBtn.addEventListener("click", () => {
    yesSound.play();
    createHearts();
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 1200);
});

/* =======================
   HEART EXPLOSION
======================= */
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "20px";
        heart.style.transform = `translate(${Math.random()*300-150}px, ${Math.random()*300-150}px)`;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1000);
    }
}
