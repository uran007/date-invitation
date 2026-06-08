document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");

    document.getElementById("startBtn").addEventListener("click", () => {

        music.play();

        document.getElementById("welcome").style.display = "none";

        document.getElementById("screen1").classList.remove("hidden");

    });

});

const typingText = document.getElementById("typingText");
const typingSub = document.getElementById("typingSub");

const messages = [
    "Hey...",
    "I have something to ask you...",
    "❤️",
    "Will You Go On A Date With Me?"
];

let line = 0;
let char = 0;

function typeWriter() {

    

    if (char < messages[line].length) {

        typingText.innerHTML += messages[line].charAt(char);

        char++;

        setTimeout(typeWriter, 60);

    } else {

        typingText.innerHTML += "<br>";

        line++;
        char = 0;

        setTimeout(typeWriter, 600);
    }
}

typeWriter();

const music = document.getElementById("bgMusic");

    

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {

    music.play();

    document.getElementById("screen1").classList.add("hidden");
    document.getElementById("screen2").classList.remove("hidden");
});

yesBtn.addEventListener("mouseenter", () => {
    scale += 0.05;
    yesBtn.style.transform = `scale(${scale})`;
});

document.getElementById("nextBtn").addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const food = document.getElementById("food").value;
    const activity = document.getElementById("activity").value;

    document.getElementById("summary").innerHTML =
        `📅 ${date || "TBD"}<br><br>🍽️ ${food}<br><br>🎉 ${activity}`;

    document.getElementById("screen2").classList.add("hidden");
    document.getElementById("screen3").classList.remove("hidden");
});

function copyPlan() {
    navigator.clipboard.writeText(
        document.getElementById("summary").innerText
    );

    alert("Date plan copied!");
}

for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);
}
