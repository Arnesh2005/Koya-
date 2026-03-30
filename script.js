function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Randomize horizontal starting position
    heart.style.left = Math.random() * 100 + "vw";

    // Randomize fall speed (between 3s and 6s)
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    // Randomize heart size
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    heart.innerText = "❤️";

    document.body.appendChild(heart);
    heart.style.textShadow = "0 0 5px #fff";
    // Remove heart after it falls to save memory
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
// 1. Setup the "No" audio object
const noSound = new Audio('No.mp3');

// 2. Global Event Listener for "No" Clicks
document.addEventListener("click", (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    // Check if the clicked link is a "No" button
    if (target.getAttribute('href') && target.getAttribute('href').includes('no')) {
        e.preventDefault(); // Stop the page from changing instantly
        noSound.play();
        
        // Delay to ensure she hears the "Fahhh" before moving to the next "No" page
        setTimeout(() => {
            window.location.href = target.href;
        }, 1500); 
    }
});

// 3. Hover sound for the moving "No" button (Final Page)
const moveNoBtn = document.querySelector("#move-random");
if (moveNoBtn) {
    moveNoBtn.addEventListener("mouseenter", () => {
        noSound.currentTime = 0; 
        noSound.play();
    });
}

// Create a heart every 300ms
setInterval(createHeart, 300);

// --- YOUR EXISTING BUTTON LOGIC ---
const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        const elm = e.target;
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    });
}