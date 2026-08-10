gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 1026px)", () => {

    // Molecule Card Animation
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


    // Fact Card Animation
    gsap.from(".fact-card", {
        scrollTrigger: {
            trigger: ".fact-card",
            start: "top 50%",
            toggleActions: "play reverse play reverse"
        },

        rotationY: 90,
        opacity: 0,

        duration: 1,

        stagger: 0.3,

        ease: "power3.out"
    });
});

 // Atom Image Rotation
    gsap.to(".atom-img", {
        rotation: 360,
        duration: 7,
        repeat: -1,
        ease: "none"
    });
