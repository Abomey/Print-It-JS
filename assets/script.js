const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

// Variable pour suivre l'index du slide actuel
let currentIndex = 1;

// Fonction pour générer les points de navigation
function generateDots() {
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index; // Met à jour l'index actuel
            showSlide(); // Affiche le slide correspondant à l'index actuel 
        });
        dotsContainer.appendChild(dot); // Ajoute le point de navigation au conteneur
    });
}

// Fonction pour mettre à jour le point de navigation actif
function updateActiveDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (currentIndex === index) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour indiquer le point actif
        } else {
            dot.classList.remove('dot_selected'); // Supprime la classe pour les points inactifs
        }
    });
}

// Fonction pour afficher un slide donné
function showSlide() {
    const slide = slides[currentIndex];
    const imageElement = document.querySelector('.banner-img');
    const textElement = document.querySelector('#banner p');

    imageElement.src = `./assets/images/slideshow/${slide.image}`; // Met à jour l'image
    textElement.innerHTML = slide.tagLine; // Met à jour le texte
    updateActiveDot();
}

function showPreviousSlide() {
    currentIndex --;
    // Si l'index actuel est infèrieur 0...
    if (currentIndex < 0) {
        // ... alors, l'index est mis à jour avec le dernier index du tableau de slides.
        currentIndex = slides.length - 1;
    }
    showSlide();
}

function showNextSlide() {
    currentIndex ++;
    // Si l'index actuel est le dernier index du tableau de slides...
    if (currentIndex === slides.length) {
        // ...alors, l'index est remis à 0.
        currentIndex = 0;
    }
    showSlide();
}

// Événement déclenché lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function() {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    // Gestion de l'événement pour le bouton de défilement vers la gauche
    arrowLeft.addEventListener('click', showPreviousSlide);
    
    // Gestion de l'événement pour le bouton de défilement vers la droite
    arrowRight.addEventListener('click', showNextSlide);
    
    generateDots(); // Génère les points de navigation
    updateActiveDot(); // Met à jour le point de navigation actif
});