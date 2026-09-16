/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#d99ba5";

        }

    });

});


/* =========================
   IMAGE FALLBACK
========================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", function () {

        this.style.display = "none";

        this.parentElement.style.background =
            "linear-gradient(135deg, #5a2330, #b9828b)";

        this.parentElement.style.display = "flex";
        this.parentElement.style.alignItems = "center";
        this.parentElement.style.justifyContent = "center";

    });

});


/* =========================
   LITTLE HEARTS
========================= */

document.addEventListener("click", function(event) {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";
    heart.style.color = "#a85f6d";
    heart.style.fontSize = "22px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.fontFamily = "Caveat, cursive";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },
            {
                transform: "translateY(-70px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 900);

});