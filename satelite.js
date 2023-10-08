const satelite = document.getElementById('satelite');

const sateliteX = window.innerWidth / 2.2;
const sateliteY = window.innerHeight / 2.8;
const sateliteRadiusX = 70; // Radio en el eje X
const sateliteRadiusY = 70; // Radio en el eje Y
let sateliteAngle = 0;
let sateliteAnimationPaused = false;

satelite.addEventListener('mouseenter', () => {
    sateliteAnimationPaused = true;
});

satelite.addEventListener('mouseleave', () => {
    sateliteAnimationPaused = false;
    updateSatelitePosition();
});

function updateSatelitePosition() {
    if (!sateliteAnimationPaused) {
        const x = sateliteX + sateliteRadiusX * Math.cos(sateliteAngle);
        const y = sateliteY + sateliteRadiusY * Math.sin(sateliteAngle);
        satelite.style.transform = `translate(${x}px, ${y}px)`;
        sateliteAngle += 0.01; // Ajusta la velocidad de la animación
        requestAnimationFrame(updateSatelitePosition);
    }
}


updateSatelitePosition();
