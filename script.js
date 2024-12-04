const burgerMenu = document.getElementById('menu');
const nav = document.getElementById("nav_menu");
const mobilnav = document.getElementById("mobilnav")

// Toggle menuen visning og skjul når burger-menuen klikkes
burgerMenu.addEventListener('click', () => {
    // Toggling 'active' class på burger-ikonet
    burgerMenu.classList.toggle('active');

    // Hvis menuen er skjult, vis den, ellers skjul den
    if (nav.style.display === "block") {
        nav.style.display = "none";  // Skjul menuen
        mobilnav.style.backgroundColor = "rgba(219, 215, 203, 0.2)";
       
    } else {
        nav.style.display = "block"; // Vis menuen
        mobilnav.style.backgroundColor = "transparent";
    }

    const header = document.getElementById('mobilnav');

    burgermenu.addEventListener('click', () => {
    header.classList.toggle('open'); // Tilføj eller fjern klassen
    burgermenu.classList.toggle('active'); // Animer burgerikonet
});
});




document.addEventListener("DOMContentLoaded", () => {
    // Funktion for at tilknytte observeren til en karrusel og opdatere prikker
    const initCarousel = (carouselId, dotsId) => {
        const carousel = document.querySelector(`#${carouselId}`);
        const dots = document.querySelectorAll(`#${dotsId} .prik`);
        const items = carousel.querySelectorAll(".kort");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(items).indexOf(entry.target);
                        setActiveDot(index, dots);
                    }
                });
            },
            {
                root: carousel, // Indstil observeren til at overvåge karrusellen
                threshold: 0.5, // Juster hvor meget af elementet, der skal være synligt
            }
        );

        items.forEach((item) => observer.observe(item));

        // Opdater aktiv prik
        function setActiveDot(index, dots) {
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        // Gå til slide ved klik på prik
        window.goToSlide = (index, carouselId) => {
            const carousel = document.querySelector(`#${carouselId}`);
            const items = carousel.querySelectorAll(".kort");
            const itemWidth = items[0].offsetWidth + 10; // Bredde + gap
            carousel.scrollTo({ left: index * itemWidth, behavior: "smooth" });
        };
    };

    // Initialiserer karrusellerne
    initCarousel('karrusel1', 'prikker1');
    initCarousel('karrusel2', 'prikker2');
});

