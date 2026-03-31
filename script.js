// --- 1. GLOBAL YES BUTTON LOGIC ---
document.addEventListener('click', async function (e) {
    // Check if the clicked element has the class "btn-yes"
    if (e.target && e.target.classList.contains('btn-yes')) {
        e.preventDefault(); // Stop instant navigation

        const yesBtn = e.target;
        yesBtn.innerText = "Arnesh got notified....hehe";
        
        // Send Formspree Notification
        const notificationForm = document.getElementById('notify-arnesh');
        if (notificationForm) {
            const formData = new FormData(notificationForm);
            try {
                await fetch(notificationForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                console.log("Arnesh notified in Gmail!");
            } catch (err) {
                console.log("Notification attempt finished.");
            }
        }

        // Trigger the "Hacker" Email Reply
        const myEmail = "arneshkar9d16@gmail.com";
        const mailtoLink = `mailto:arneshkar9d16@gmail.com?subject=RE: ✅ SYSTEM CRITICAL: OVERRIDE SUCCESSFUL&body=[SYSTEM LOG]: Manual override confirmed.%0D%0A[STATUS]: Relationship protocol initialized.%0D%0A%0D%0A(I say yes! ❤️)`;
        window.location.href = mailtoLink;

        // Redirect to Success Page
        setTimeout(() => {
            window.location.href = "yes.html";
        }, 2500);
    }
});

// --- 2. HEART ANIMATIONS ---
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.innerText = "❤️";
    heart.style.textShadow = "0 0 5px #fff";
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 300);

// --- 3. NO BUTTON LOGIC (Audio & Moving) ---
const noSound = new Audio('No.mp3');

document.addEventListener("click", (e) => {
    const target = e.target.closest('a');
    if (!target) return;

    // Check if it's a "No" link
    if (target.getAttribute('href') && target.getAttribute('href').includes('no')) {
        e.preventDefault(); 
        noSound.play();
        setTimeout(() => {
            window.location.href = target.href;
        }, 1500);
    }
});

const moveRandom = document.querySelector("#move-random");
if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        const elm = e.target;
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
        noSound.currentTime = 0;
        noSound.play();
    });
}
