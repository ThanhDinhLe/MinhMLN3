const leaves = document.querySelectorAll(".leaf");

let currentLeaf = null;
let offsetX = 0;
let offsetY = 0;
let zIndexCounter = 100;
let gameScale = 1;

// Canva background is 1920x1080. Scale the full canvas so image positions
// and sizes retain the same proportions on every screen.
function fitGameCanvas() {
    const game = document.querySelector(".game");
    gameScale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    game.style.left = (window.innerWidth - 1920 * gameScale) / 2 + "px";
    game.style.top = (window.innerHeight - 1080 * gameScale) / 2 + "px";
    game.style.transform = `scale(${gameScale})`;
}

fitGameCanvas();
window.addEventListener("resize", fitGameCanvas);

leaves.forEach(leaf => {

    leaf.addEventListener("mousedown", (e) => {

        e.preventDefault();

        currentLeaf = leaf;

        // Đưa lá đang kéo lên trên cùng
        currentLeaf.style.zIndex = ++zIndexCounter;

        const rect = currentLeaf.getBoundingClientRect();

        offsetX = (e.clientX - rect.left) / gameScale;
        offsetY = (e.clientY - rect.top) / gameScale;

    });

});

document.addEventListener("mousemove", (e) => {

    if (!currentLeaf) return;

    const game = document.querySelector(".game");
    const gameRect = game.getBoundingClientRect();

    let x = (e.clientX - gameRect.left) / gameScale - offsetX;
    let y = (e.clientY - gameRect.top) / gameScale - offsetY;

    // Giới hạn trong khung game
    x = Math.max(
        -currentLeaf.offsetWidth / 2,
        Math.min(
            x,
            game.offsetWidth - currentLeaf.offsetWidth / 2
        )
    );

    y = Math.max(
        -currentLeaf.offsetHeight / 2,
        Math.min(
            y,
            game.offsetHeight - currentLeaf.offsetHeight / 2
        )
    );

    currentLeaf.style.left = x + "px";
    currentLeaf.style.top = y + "px";

});

document.addEventListener("mouseup", () => {

    currentLeaf = null;

});
const checkBtn = document.getElementById("checkBtn");
const answerInput = document.getElementById("answerInput");
const message = document.getElementById("message");
const answer = answerInput.value.trim().toLowerCase();

checkBtn.addEventListener("click", () => {

    const answer = answerInput.value.trim().toLowerCase();

    if(answer === "tu do"){

        window.location.href = "index2.html";

    }else{

        message.textContent = "❌ Đáp án sai!";
    }

});
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");

startBtn.addEventListener("click", () => {

    startScreen.style.display = "none";

    gameScreen.style.display = "block";

});
