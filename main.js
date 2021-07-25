const slider = document.querySelector(".slider");
const trail = document.querySelector(".trail").querySelectorAll("div");

let value = 0;
let trailValue = 0;
let interval = 4000;

const slide = (condition) => {
    clearInterval(start);
    condition === 'increase' ? initiateINC() : initiateDEC();
    move(value, trailValue);
    animate();
    start = setInterval(() => slide("increase"), interval);
};

const initiateINC = () => {
    trail.forEach( cur => cur.classList.remove("active"));
    value === 80 ? value = 0 : value += 20;
    trailUpdate();
};

const initiateDEC = () => {
    trail.forEach(cur => cur.classList.remove("active"));
    value === 0 ? value = 80 : value -= 20;
    trailUpdate();
};

const move = (S, T) => {
    slider.style.transform = `translateX(-${S}%)`;
    trail[T].classList.add("active");
};

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}});
tl.from(".bg", {x: "-100%", opacity: 0});