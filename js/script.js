const lerp = (f0, f1, t)  => (1 - t) * f0 + t * f1;
const mouse ={
    newX: 0,
    newY: 0,
    speedX: 0,
    speedY: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0
};

const $cursor = document.querySelector('.cursor');
const links = document.querySelectorAll('[data-link]');

const handleMouse = (e) => {
if (!mouse.hover) {
    mouse.x = e.clientX || e.touches[0].clientX;
    mouse.y = e.clientY || e.touches[0].clientY;
}
}

window.addEventListener("mousemove", handleMouse);
window.addEventListener("touchmove", handleMouse);
window.addEventListener("touchstart", handleMouse);

let timer;

links.forEach((link) => {
link.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        $cursor.classList.add('hover');
        mouse.hover = true;
        const { top, left, width, height } = link.getBoundingClientRect();
        mouse.x = left - 6;
        mouse.y = top - 1;
        mouse.width = width;
        mouse.height = height;
    }, 100);
});

link.addEventListener("mouseleave", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        $cursor.classList.remove('hover');
        mouse.hover = false;
    }, 100);
});
});

const raf = () => {
mouse.newX = lerp(mouse.newX, mouse.x, 1.2)
mouse.newY = lerp(mouse.newY, mouse.y, 1.2)

mouse.speedX = lerp(mouse.speedX, mouse.x - mouse.newX, 1.2)
mouse.speedY = lerp(mouse.speedY, mouse.y - mouse.newY, 1.2)
const speed = Math.abs(mouse.speedX) > Math.abs(mouse.speedY) ? mouse.speedX : -mouse.speedY

let style

if(!mouse.hover){
    style = {
        width: '30px',
        height: '30px',
        marginLeft: '-15px',
        marginTop: '-15px',
        transform:
           `translate(${mouse.newX}px, ${mouse.newY}px) rotate(${45-speed*0.2}deg) scale(${1-Math.abs(speed)*0.001})`
    }
}
    else{
        style = {
        width: `${mouse.width}px`,
        height: `${mouse.height}px`,
        marginLeft: 0,
        marginTop: 0,
        transform: `translate(${mouse.newX}px, ${mouse.newY}px) rotate(0deg) scale(${1 - Math.abs(speed) * 0.001})`
        }
    }

    Object.assign($cursor.style, style)
    requestAnimationFrame(raf)
};

raf();

var text = document.getElementById('text')

function handleOpen() {
    text.style.overflow = 'visible'
}