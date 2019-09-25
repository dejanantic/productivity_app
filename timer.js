(function Timer() {
    const startValue = 2700;
    let duration = startValue;
    let countdownTimer;
    const timer = document.querySelector('.timer');
    const display = document.querySelector('.display');
    const startBtn = document.querySelector('#start');
    const pauseBtn = document.querySelector('#pause');
    const resetBtn = document.querySelector('#reset');


    timer.addEventListener('click', function listenForClicks(e) {
        if (e.target.tagName !== 'BUTTON') return;
        let buttons = document.querySelectorAll('button');
        switch (e.target.id) {
            case 'start':
                timer.dataset.status = 'active';
                countdownTimer = setInterval(countdown, 1000);
                duration === startValue && resetBtn.hidden ?
                    buttons.forEach(button => button.hidden = !button.hidden) : invertPlayPauseVisibility();
                console.log('timer started');
                break;
            case 'pause':
                if (timer.dataset.status === 'finished') return;
                timer.dataset.status = 'paused';
                invertPlayPauseVisibility();
                stopTimer(countdownTimer);
                console.log('timer paused');
                break;
            default:
                stopTimer(countdownTimer);
                timer.dataset.status = 'ready';
                duration = startValue;
                resetButtonVisibility();
                display.innerText = 'Press start to begin';
                console.log('timer was reset');
        }
    })

    const invertPlayPauseVisibility = function switchVisibility() {
        startBtn.hidden = !startBtn.hidden;
        pauseBtn.hidden = !pauseBtn.hidden;
    }

    // Reset timer's button visibility to original starting values
    const resetButtonVisibility = function setStartingVisibility() {
        startBtn.hidden = false;
        pauseBtn.hidden = true;
        resetBtn.hidden = true;
    }

    const stopTimer = function killCurrentTimerInstance(timer) {
        clearInterval(timer);
    }

    const countdown = function countdownFunction() {
        let minutes, seconds;

        if (timer.dataset.status === 'finished') return;

        // Play sound if fifteen minutes have gone by
        if (duration === 1800 || duration === 900) {
            let sound = new Audio('./media/glass_ping.mp3');
            sound.play();
        }

        minutes = parseInt(duration / 60, 10);
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerText = `${minutes}:${seconds}`;
        console.log(`${minutes}:${seconds}`);

        if (duration < 0) {
            timer.dataset.status = 'finished';
            pauseBtn.hidden = !pauseBtn.hidden;
            display.innerText = `Session done! Take 5 :)`;
            let sound = new Audio('./media/beepbeep.mp3');
            sound.play();
        }

        duration--;
    }

})();