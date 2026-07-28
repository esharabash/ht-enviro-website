/*=====================================================
HT-ENVIRO WEBSITE
Main JavaScript
Version 2.0
=====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=========================================
      Sticky Header
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {

            header.classList.add("sticky-header");

        } else {

            header.classList.remove("sticky-header");

        }

    });


    /*=========================================
      Smooth Scroll
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /*=========================================
      Scroll Reveal Animation
    =========================================*/

    const revealItems = document.querySelectorAll(

        ".solution-card, .why-card, .technology-card, .news-card, .partner-logo"

    );

    const revealObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealItems.forEach(item => {

        item.classList.add("hidden");

        revealObserver.observe(item);

    });
    /*=========================================
      Button Hover Effect
    =========================================*/

    const buttons = document.querySelectorAll(

        ".btn-primary, .btn-secondary, .quote-button"

    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", function () {

            this.style.transition = "all .35s ease";

        });

    });


    /*=========================================
      Active Navigation
    =========================================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".menu a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /*=========================================
  Mobile Navigation
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("mobile-open");
        menuToggle.classList.toggle("active");

    });

}


    /*=========================================
      Back To Top Button
    =========================================*/

    const backToTop = document.createElement("button");

    backToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    backToTop.className = "back-to-top";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });
    /*=========================================
      Console Message
    =========================================*/

    console.log(
        "HT-Enviro Corporate Website loaded successfully."
    );

});