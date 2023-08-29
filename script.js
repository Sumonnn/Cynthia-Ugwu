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
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;

            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power1,
                top: diff,
                left: dets.clientX - 150,
                rotate: gsap.utils.clamp(-20, 20, diffrot),
            })

        })
        elem.addEventListener("mouseenter", () => {
            gsap.to(document.querySelector(".cursur"), {
                width: '80px',
                height: '80px',
            })
            document.querySelector(".cursur>p").style.display = 'block';
        })
        elem.addEventListener("mouseleave", (dets) => {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power1,
            })
            gsap.to(document.querySelector(".cursur"), {
                width: '12px',
                height: '12px',
            })
            document.querySelector(".cursur>p").style.display = 'none';

        })
    })
}
function loder() {
    let grow = 0;
    setInterval(() => {
        if (grow <= 100) {
            document.querySelector(".inner").style.width = `${grow}%`;
            grow += Math.floor(Math.random()
                * 15);
            document.querySelector(".number").textContent = `${grow}%`;
            if (grow > 99) {
                document.querySelector(".inner").style.width = `100%`;
                document.querySelector(".number").textContent = `100%`;
            }
        }
        else
        {
            clearInterval();
            document.querySelector('.full-screen').style.top = `-100vh`;
        }
    }, 150);
}

cursurMove();
firstPageAnim();
cursurChaptaKaro();
secondPageElemAnim();
loder();
