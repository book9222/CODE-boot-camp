const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const reset = document.querySelector('#reset');
const p1Dis = document.querySelector('#P1Display');
const p2Dis = document.querySelector('#P2Display');
const winScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winingScore = parseInt(winScoreSelect.value);
let gameOver = false

p1Btn.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winingScore) {
            gameOver = true;
            p1Dis.classList.add('has-text-success')
            p2Dis.classList.add('has-text-danger')
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Dis.textContent = p1Score;
        //console.log('+1 p1');
    }
})

p2Btn.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winingScore) {
            gameOver = true;
            p2Dis.classList.add('has-text-success')
            p1Dis.classList.add('has-text-danger')
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p2Dis.textContent = p2Score;
        //console.log('+1 p2');
    }
})

reset.addEventListener('click', Reset)

winScoreSelect.addEventListener('change', function () {
    console.log(this.value);
    winingScore = parseInt(this.value);
    Reset();
})

function Reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1Dis.textContent = p1Score;
    p2Dis.textContent = p2Score;
    p1Dis.classList.remove('has-text-success', 'has-text-danger');
    p2Dis.classList.remove('has-text-success', 'has-text-danger');
    p1Btn.disabled = false;
    p2Btn.disabled = false;
}