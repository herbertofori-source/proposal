function showProposal() {
    document.getElementById("intro").classList.remove("active");

    setTimeout(() => {
        document.getElementById("proposal").classList.add("active");
    }, 500);
}

function sayYes() {
    document.getElementById("proposal").classList.remove("active");

    setTimeout(() => {
        document.getElementById("yesScreen").classList.add("active");
        createConfetti();
    }, 500);
}

function sayMaybe() {
    alert("I'll take that as a 'think about it' ❤️");
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "8px";
        confetti.style.background =
            `hsl(${Math.random() * 360}, 100%, 60%)`;
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-10px";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 2 + Math.random() * 3;

        confetti.animate(
            [
                { transform: "translateY(0) rotate(0deg)" },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 1000}deg)`
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}