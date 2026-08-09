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