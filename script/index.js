const particleData = {

    proton: {

        title: "Proton",

        description:
            "A proton is a positively charged particle found inside the nucleus.",

        extra:
            "Charge: Positive (+)<br>Location: Nucleus"

    },

    neutron: {

        title: "Neutron",

        description:
            "A neutron is a particle with no electrical charge found inside the nucleus.",

        extra:
            "Charge: Neutral (0)<br>Location: Nucleus"

    },

    electron: {

        title: "Electron",

        description:
            "An electron is a negatively charged particle that moves around the nucleus.",

        extra:
            "Charge: Negative (-)<br>Location: Electron Shell"

    }

};


const particleButtons =
    document.querySelectorAll(".particle-btn");


particleButtons.forEach(button => {

    button.addEventListener("click", function () {

        particleButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        const particle =
            particleData[this.dataset.particle];


        document
            .getElementById("particle-title")
            .textContent =
            particle.title;


        document
            .getElementById("particle-description")
            .textContent =
            particle.description;


        document
            .getElementById("particle-extra")
            .innerHTML =
            particle.extra;

    });

});

gsap.registerPlugin(ScrollTrigger);


gsap.from(".section-title", {
    scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },

    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".section-description", {
    scrollTrigger: {
        trigger: ".section-description",
        start: "top 85%",
        toggleActions: "play reverse play reverse"

    },

    y: 40,
    opacity: 0,
    duration: 0.8
});


gsap.from(".particle-info", {
    scrollTrigger: {
        trigger: ".particle-buttons",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },

    y: 50,
    opacity: 0,
    scale: 0.8,

    duration: 0.6,

    stagger: 0.2,

    ease: "back.out(1.7)"
});
gsap.fromTo(
    ".family-content",
    {
        x: -200,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        duration: 1,

        scrollTrigger: {
            trigger: ".family-content",
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false
        }
    }
);