const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let timeOut = 0;

function cursurChaptaKaro() {
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeOut);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        cursurMove(xscale, yscale);
        // console.log(xscale, yscale);

        timeOut = setTimeout(() => {
            document.querySelector(".cursur").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${1, 1})`;

        }, 100);
    })
}
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
            stagger: 0.2,
            delay: -1,
        })
        .from(".page1-footer", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
        })
}

function cursurMove(xscale, yscale) {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector(".cursur").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale, yscale})`;
    })
}

function secondPageElemAnim() {
    document.querySelectorAll(".elem").forEach((elem) => {

        let rotate = 0;
        let diffrot = 0;

        elem.addEventListener("mousemove", (dets) => {
            
            let diff = dets.clientY - 150 - elem.getBoundingClientRect().top;
            // diffrot = dets.clientX - rotate;
            // rotate = dets.clientX;
            
            console.log(diff);

            gsap.to(elem.querySelector("img"), {
                display: 'block',
                ease:Power1,
                top:diff,
                left:dets.clientX - 150,
                // rotate:gsap.utils.clamp(-20,20,diffrot),   
            })
        })
        elem.addEventListener("mouseleave", (dets) => {
            gsap.to(elem.querySelector("img"), {
                display: 'none',
                ease:Power1,
            })
        })
    })
}


cursurMove();
// firstPageAnim();
cursurChaptaKaro();
secondPageElemAnim();

