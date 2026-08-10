document.querySelectorAll(".molecule").forEach((molecule) => {
    gsap.set(molecule,{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
    });
    animateMolecule(molecule);
});

function animateMolecule(molecule){
    gsap.to(molecule,{
        x: Math.random()*window.innerWidth,
        y: Math.random()*window.innerHeight,
        duration: gsap.utils.random(8,15),
        ease:"sine.inOut",
        repeat:0,
        onComplete:()=>animateMolecule(molecule)
    });
}
const table = document.getElementById("periodic-table");

async function loadElements() {
    try {
        const response = await fetch(
            // "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
            "https://cdn.jsdelivr.net/gh/Bowserinator/Periodic-Table-JSON@master/PeriodicTableJSON.json"
        );
        const data = await response.json();
        data.elements.forEach(element => {
    const wrapper = document.createElement("div");
    wrapper.className = "element-wrapper";
    
    // Get category from API
    const category = element.category
        ?.toLowerCase()
        .replace(/\s+/g, "-") || "unknown";

    // Add category as CSS class
    wrapper.classList.add(category);

    wrapper.style.setProperty(
        "--column",
        element.group
    );

    wrapper.style.setProperty(
        "--row",
        element.period
    );

    wrapper.innerHTML = `

        <div class="element">

            <div class="number">
                ${element.number}
            </div>

            <div class="symbol">
                ${element.symbol}
            </div>

            <div class="name">
                ${element.name}
            </div>

        </div>

    `;

    table.appendChild(wrapper);

    wrapper.addEventListener("click", () => {

        document.querySelector(".element-info")
            .style.display = "flex";

        document.getElementById("info-symbol")
            .innerHTML = element.symbol;

        document.getElementById("info-name")
            .innerHTML = element.name;

        document.getElementById("info-details")
            .innerHTML = `

                Atomic Number :
                ${element.number}

                <br><br>

                Atomic Mass :
                ${element.atomic_mass}

                <br><br>

                Electron Configuration :
                ${element.electron_configuration}

                <br><br>

                Phase :
                ${element.phase}

                <br><br>

                Discovered By :
                ${element.discovered_by ?? "Unknown"}

            `;

        document.getElementById("atom-model")
            .src = element.bohr_model_3d;
    });


    // GSAP animation
    gsap.from(wrapper, {

        opacity: 0,

        scale: 0.5,

        y: 30,

        duration: 0.5,

        delay: element.number * 0.01,

        ease: "back.out(1.7)"

    });

});


    } catch (error) {

        console.error(
            "Error fetching periodic table:",
            error
        );

    }

}


loadElements();
document.getElementById("close-info")
.addEventListener("click",()=>{

    document.querySelector(".element-info")
    .style.display="none";

});