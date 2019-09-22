(function Timer() {
    const startValue = 2700;
    let duration = startValue;
    const timer = document.querySelector('.timer');
    const display = document.querySelector('.display');
    const startBtn = document.querySelector('#start');
    const pauseBtn = document.querySelector('#pause');
    const resetBtn = document.querySelector('#reset');


    timer.addEventListener('click', function startTimer(e) {
        if (e.target.tagName !== 'BUTTON') return;
        let buttons = document.querySelectorAll('button');
        switch (e.target.id) {
            case 'start':
                timer.dataset.status = 'active';
                duration === startValue ? buttons.forEach(button => button.hidden = !button.hidden) : invertPlayPauseVisibility();
                console.log('timer started'); // call timer() function on this line
                duration--;
                break;
            case 'pause':
                timer.dataset.status = 'paused';
                invertPlayPauseVisibility();
                console.log('timer paused');
                break;
            default:
                timer.dataset.status = 'ready'
                duration = startValue;
                resetBtn.hidden = !resetBtn.hidden;
                if (startBtn.hidden) invertPlayPauseVisibility();
                console.log('timer was reset')
        }
    })

    let invertPlayPauseVisibility = function switchButtonVisibility() {
        startBtn.hidden = !startBtn.hidden;
        pauseBtn.hidden = !pauseBtn.hidden;
    }

    let startTimer = function countdown() {

    }

})();