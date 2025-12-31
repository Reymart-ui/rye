
/* =======================
   TYPING NAME EFFECT
======================= */
const nameText = "@clyde";  // Removed leading space for cleaner display
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
        const mins = Math.floor((diff / 1000 * 60) % 60);
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

// Array of messages for the "Not yet" button (10 options)
const noMessages = [
    "Are you sure? 🙈",
    "Think again! 😏",
    "Come on, give it a shot! 💪",
    "Don't be shy! 🌟",
    "You know you want to! 😉",
    "One more try? 🎉",
    "Let's make it happen! 🚀",
    "Why not now? 🤔",
    "Embrace the new year! 🥳",
    "Final chance? 😊"
];

// Array of corresponding sound file IDs (must match the <audio> IDs in HTML)
const soundFiles = [
    "Sound1",  // For "Are you sure? 🙈"
    "sound2",  // For "Think again! 😏"
    "sound3",  // For "Come on, give it a shot! 💪"
    "sound4",  // For "Don't be shy! 🌟"
    "sound5",  // For "You know you want to! 😉"
    "sound6",  // For "One more try? 🎉"
    "sound7",  // For "Let's make it happen! 🚀"
    "sound8",  // For "Why not now? 🤔"
    "sound9",  // For "Embrace the new year! 🥳"
    "sound10"  // For "Final chance? 😊"
];

let interactionCount = 0;  // Counter for hover/touch interactions

function moveNo() {
    // Move the button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Change text and play sound on each interaction
    interactionCount++;
    if (interactionCount <= noMessages.length) {
        noBtn.innerHTML = noMessages[interactionCount - 1];
        // Play the corresponding sound
        const sound = document.getElementById(soundFiles[interactionCount - 1]);
        if (sound) {
            sound.currentTime = 0;  // Restart if already playing
            sound.play().catch((error) => {
                console.log('Sound playback blocked or failed:', error);
            });
        }
    }

    // After 10 interactions, hide the button and show motivational message
    if (interactionCount === 10) {
        noBtn.style.display = "none";
        const messageDiv = document.createElement("div");
        messageDiv.className = "message bold";
        messageDiv.innerHTML = "Let go of the past in 2025 and step boldly into 2026. Every new year is a fresh start—embrace it with open arms! 🌟";
        document.querySelector(".container").appendChild(messageDiv);
    }
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

/* =======================
   BACKGROUND MUSIC AUTOPLAY
======================= */
const bgMusic = document.getElementById('bgMusic');

// Attempt to play background music automatically on page load
window.addEventListener('load', () => {
    bgMusic.play().catch((error) => {
        // If autoplay is blocked (common in browsers), log it and optionally prompt user
        console.log('Autoplay blocked by browser. Music will play on user interaction.');
        // Optional: Add a play button or message to the page if needed
        // For example: document.body.innerHTML += '<button onclick="bgMusic.play()">Play Music</button>';
    });
});

// Optional: Ensure music plays on any user interaction (e.g., click anywhere) if blocked
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
}, { once: true });  // 'once' ensures it only triggers on the first click
