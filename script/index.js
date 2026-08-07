console.log("JS Loaded");

document.querySelectorAll(".molecule").forEach((molecule) => {

    gsap.set(molecule, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
    });

    animateMolecule(molecule);

});

function animateMolecule(molecule) {

    gsap.to(molecule, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: "+=360",
        duration: gsap.utils.random(8, 15),
        ease: "sine.inOut",
        onComplete: () => animateMolecule(molecule)
    });

}