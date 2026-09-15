const leaves = document.querySelectorAll(".leaf");

let currentLeaf = null;
let offsetX = 0;
let offsetY = 0;
let zIndexCounter = 100;

leaves.forEach(leaf => {

    leaf.addEventListener("mousedown", (e) => {

        e.preventDefault();

        currentLeaf = leaf;

        // Đưa lá đang kéo lên trên cùng
        currentLeaf.style.zIndex = ++zIndexCounter;

        const rect = currentLeaf.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

    });

});

document.addEventListener("mousemove", (e) => {

    if (!currentLeaf) return;

    const game = document.querySelector(".game");
    const gameRect = game.getBoundingClientRect();

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Giới hạn trong khung game
    x = Math.max(
        -currentLeaf.offsetWidth / 2,
        Math.min(
            x,
            gameRect.width - currentLeaf.offsetWidth / 2
        )
    );

    y = Math.max(
        -currentLeaf.offsetHeight / 2,
        Math.min(
            y,
            gameRect.height - currentLeaf.offsetHeight / 2
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

    if(answer === "ngan phieu"){

        window.location.href = "index5.html";

    }else{

        message.textContent = "❌ Đáp án sai!";
    }

});