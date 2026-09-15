const leaves = document.querySelectorAll(".leaf");

let currentLeaf = null;
let offsetX = 0;
let offsetY = 0;
let zIndexCounter = 100;
let sceneScale = 1;

// Scale toàn bộ bố cục chuẩn 1486 × 686, thay vì scale nền và lá riêng lẻ.
function fitGameScene() {
    const scene = document.querySelector(".game-scene");
    const sceneWidth = 1486;
    const sceneHeight = 686;

    sceneScale = Math.min(
        window.innerWidth / sceneWidth,
        window.innerHeight / sceneHeight
    );
    scene.style.left = (window.innerWidth - sceneWidth * sceneScale) / 2 + "px";
    scene.style.top = (window.innerHeight - sceneHeight * sceneScale) / 2 + "px";
    scene.style.transform = `scale(${sceneScale})`;
}

fitGameScene();
window.addEventListener("resize", fitGameScene);

leaves.forEach(leaf => {

    leaf.addEventListener("mousedown", (e) => {

        e.preventDefault();

        currentLeaf = leaf;

        // Đưa lá đang kéo lên trên cùng
        currentLeaf.style.zIndex = ++zIndexCounter;

        const rect = currentLeaf.getBoundingClientRect();

        offsetX = (e.clientX - rect.left) / sceneScale;
        offsetY = (e.clientY - rect.top) / sceneScale;

    });

});

document.addEventListener("mousemove", (e) => {

    if (!currentLeaf) return;

    const scene = document.querySelector(".game-scene");
    const sceneRect = scene.getBoundingClientRect();

    let x = (e.clientX - sceneRect.left) / sceneScale - offsetX;
    let y = (e.clientY - sceneRect.top) / sceneScale - offsetY;

    // Giới hạn trong khung game
    x = Math.max(
        -currentLeaf.offsetWidth / 2,
        Math.min(
            x,
            1486 - currentLeaf.offsetWidth / 2
        )
    );

    y = Math.max(
        -currentLeaf.offsetHeight / 2,
        Math.min(
            y,
            686 - currentLeaf.offsetHeight / 2
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

    if(answer === "nhan quyen"){

        window.location.href = "index5.html";

    }else{

        message.textContent = "❌ Đáp án sai!";
    }

});
