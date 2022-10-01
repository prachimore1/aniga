function Timer () {
    return (
        <div>
            <div className="timer-container">
                <div className="background">&nbsp;</div>
                <div className="background-inner">&nbsp;</div>

                <svg height="400" width="400">
                    <circle r="190" cx="200" cy="200" fill="transparent" strokeWidth="20"
                            transform="rotate(-90 200 200)">
                    </circle>
                </svg>
                <div className="form">
                    <input type="number" id="duration" value="60" placeholder="00.00" />
                        <div className="buttons">
                            <div className="button" id="start"><i className="fa-solid fa-play"/></div>
                            <div className="button" id="pause"><i className="fa-solid fa-pause"/></div>
                        </div>
                </div>
            </div>
            <div className="themes-container">
                <div className="button" id="whiteTheme"/>
                <div className="button" id="greenTheme"/>
                <div className="button" id="bluegrayTheme"/>
            </div>
        </div>
    );
}

class TimerClass {
    constructor(durationInput, startButton, pauseButton, container, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.container = container;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onPause = callbacks.onPause;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
            this.onReset = callbacks.onReset;
        }
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('click', () => this.durationInput.value = '');
        this.durationInput.addEventListener('keydown', (e) => e.key === 'Enter' ? this.start() : null)
    }

    start = () => {
        this.onStart?.(this.durationInput.value);
        this.tick();
        this.interval = setInterval(this.tick, 10);
        this.pauseButton.removeEventListener('click', this.reset);
        this.pauseButton.addEventListener('click', this.pause);

    }

    pause = () => {
        this.onPause();
        clearInterval(this.interval);
        this.pauseButton.removeEventListener('click', this.pause);
        this.pauseButton.addEventListener('click', this.reset);

    }

    tick = () => {
        if (this.durationInput.value <= 0) {
            this.pause();
            this.onComplete?.();
        }
        else {
            this.durationInput.value = (this.durationInput.value - .01).toFixed(2);
            this.onTick?.();
        }
    }
    reset = () => {
        this.onReset?.();
        durationInput.value == 0.00 ? this.durationInput.value = '60.00' : durationInput.value = '';
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const container = document.querySelector('.background');
const theme = document.documentElement.style;

const timer = new TimerClass(durationInput, startButton, pauseButton, container, {
    onStart(duration) {
        circle.setAttribute("pathLength", duration);
        circle.setAttribute("stroke-dasharray", duration);
        // eslint-disable-next-line no-unused-expressions
        duration === 0 ? circle.setAttribute("stroke-dashoffset", 0) : '';
        this.pauseButton.firstChild.setAttribute('class', 'fa-solid fa-pause');
        this.startButton.classList.add('disabled');
    },
    onPause() {
        this.pauseButton.firstChild.setAttribute('class', 'fa-solid fa-rotate-right');
        this.startButton.classList.remove('disabled');
    },
    onTick() {
        circle.setAttribute("stroke-dashoffset", circle.getAttribute("stroke-dashoffset") - .01);
    },
    onComplete() {
        this.startButton.classList.add('disabled');
        this.container.classList.add('animation');
        this.durationInput.setAttribute('disabled', 'true');
    },
    onReset() {
        circle.setAttribute("stroke-dashoffset", 0);
        this.startButton.firstChild.setAttribute('class', 'fa-solid fa-play');
        this.pauseButton.firstChild.setAttribute('class', 'fa-solid fa-pause');
        this.startButton.addEventListener('click', this.start);
        this.startButton.classList.remove('disabled');
        this.container.classList.remove('animation');
        this.durationInput.removeAttribute('disabled');
    }
});
document.querySelector('#whiteTheme').addEventListener('click', () => changeTheme('white'));
document.querySelector('#greenTheme').addEventListener('click', () => changeTheme('green'));
document.querySelector('#bluegrayTheme').addEventListener('click', () => changeTheme('bluegray'));
function changeTheme(color){
    if(color === 'white'){
        theme.setProperty('--main-color', '#676f77');
        theme.setProperty('--backgound-color', '#e0e0e0');
        theme.setProperty('--light-shadow', '#fff');
        theme.setProperty('--dark-shadow', '#989898');
        theme.setProperty('--stroke-color', 'rgba(200,200,200,0.7)');
    }
    if(color === 'green'){
        theme.setProperty('--main-color', '#005050');
        theme.setProperty('--backgound-color', '#008080');
        theme.setProperty('--light-shadow', '#009393');
        theme.setProperty('--dark-shadow', '#003d3d');
        theme.setProperty('--stroke-color', 'rgba(0,102,102,0.7)');
    }
    if(color === 'bluegray'){
        theme.setProperty('--main-color', '#163543');
        theme.setProperty('--backgound-color', '#365563');
        theme.setProperty('--light-shadow', '#3e6272');
        theme.setProperty('--dark-shadow', '#0e2834');
        theme.setProperty('--stroke-color', 'rgba(34,65,79,0.5)');
    }
}

