gsap.registerPlugin(ScrollTrigger);


gsap.from(".molecule-card", {
    scrollTrigger: {
        trigger: ".molecule-card",
        start: "top 50%",
        toggleActions: "play reverse play reverse"

    },

    y: 80,
    opacity: 0,
    scale: 1.5,

    duration: 1,

    ease: "power3.out"
});


gsap.from(".fact-card", {
    scrollTrigger: {
        trigger: ".fact-card",
        start: "top 50%",
        toggleActions:"play reverse play reverse"
    },

    rotationY: 90,
    opacity: 0,

    duration: 1,

    stagger: 0.3,

    ease: "power3.out",
});

gsap.to(".atom-img", {
    rotation: 360,
    duration: 7,
    repeat: -1,
    ease: "none"
});