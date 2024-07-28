const countBtn = document.getElementById("countBtn");
const countNumber = document.getElementById("count");

let count = 0;

function updateCount() {
    count++;
    countNumber.textContent = count;
}

countBtn.addEventListener("click", updateCount);