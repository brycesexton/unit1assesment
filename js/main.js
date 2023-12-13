let ovrCount = document.getElementById("ovrCount");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let inputNum = document.getElementById("inputNum");

let count = 0;

function updateDisplay() {
    ovrCount.textContent = count;
}

plusBtn.addEventListener("click", function() {
    count++;
    plusBtn.classList.add("button-clicked");
    updateDisplay();
});

minusBtn.addEventListener("click", function() {
    count--;
    minusBtn.classList.add("button-clicked");
    updateDisplay();
});

function increase(plusBtn) {
    if (click) {
        count++;
        plusBtn.style.backgroundColor = 'darkgrey'; 
    }
}

function decrease(minusBtn) {
    if (click) {
        count--;
    }
}

// function updateResult() {
//     document.getElementById("result").textContent = count;
// }
