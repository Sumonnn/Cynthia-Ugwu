const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function firstPageAnim() {
    let tl = gsap.timeline();
    tl.from("nav", {
        y: `-100`,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to(".boundingelem", {
            y: 0,
            duration: 2,
            ease: Expo.easeInOut,
            stagger:0.2,
            delay:-1,
    })
    .from(".page1-footer",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}

function cursurMove() {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector(".cursur").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}
cursurMove();
firstPageAnim();

