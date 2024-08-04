/**
 * List of jobs that should be run when the page is idle.
 * @type {(()=>void)[]}
 */
export let idleQueue = [];

const idleTime = 300 // 0.3 seconds

function runIdleQueue(){
    idleQueue.shift()?.();
    resetTimer();
}

let timer; // must be declared here
function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(runIdleQueue, idleTime);
}

window.addEventListener('load', resetTimer, true);
// window.addEventListener('mousemove', resetTimer, true);
window.addEventListener('mousedown', resetTimer, true);
window.addEventListener('touchstart', resetTimer, true);
window.addEventListener('touchmove', resetTimer, true);
window.addEventListener('click', resetTimer, true);
window.addEventListener('keydown', resetTimer, true);
// window.addEventListener('scroll', resetTimer, true);
// window.addEventListener('wheel', resetTimer, true);
