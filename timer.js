// Beginning timer value
const startValue = 2700;

let duration = startValue;

// Timer area
const display = document.querySelector('.display');

// Buttons
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

// Click actions

// Start the timer
startBtn.addEventListener('click', function startTimer() {
    if (display.dataset.timerStatus === 'finished') return;
    if (display.dataset.timerStatus === 'active') return;
    timer();
    display.dataset.timerStatus = 'active';
})

// Pause the timer
pauseBtn.addEventListener('click', function pauseTimer() {
    if (duration === startValue) return;
    display.dataset.timerStatus = 'paused';
})

// Timer function
function timer() {
    let minutes, seconds;

    var interval = setInterval(function () {

        // Check if timer was paused/finished
        if (!(display.dataset.timerStatus === 'active')) {
            clearInterval(interval);
            return;
        }

        minutes = parseInt(duration / 60, 10);
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerText = `${minutes}:${seconds}`;

        duration--;

        if (duration < 0) {
            clearInterval(interval);
            display.dataset.timerStatus = 'finished';
            display.innerText = 'Session done! Take 5 :)'
        }
    }, 1000)
}

function reset() {
    if (duration === startValue) return;
    duration = startValue;
    display.dataset.timerStatus = 'ready';
    display.innerText = 'Press start to begin';
}