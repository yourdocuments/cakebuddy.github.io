/* =====================================================
   CAKES BUDDY - FULL SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", (e) => {
            e.stopPropagation();

            mobileMenu.classList.toggle("show");

            menuButton.textContent =
                mobileMenu.classList.contains("show")
                    ? "✕"
                    : "☰";
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("show");
                menuButton.textContent = "☰";
            });
        });
    }


    /* =================================================
       SEARCH
    ================================================= */

    const searchButton = document.getElementById("searchButton");
    const searchDropdown = document.getElementById("searchDropdown");
    const searchInput = document.getElementById("cakeSearchInput");
    const searchItems = document.querySelectorAll(".search-item");
    const noResult = document.getElementById("noResult");

    if (searchButton && searchDropdown) {

        searchButton.addEventListener("click", (e) => {
            e.stopPropagation();

            searchDropdown.classList.toggle("show");

            if (searchDropdown.classList.contains("show") && searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
        });

        searchDropdown.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }


    document.addEventListener("click", () => {

        if (searchDropdown) {
            searchDropdown.classList.remove("show");
        }

        if (mobileMenu) {
            mobileMenu.classList.remove("show");
        }

        if (menuButton) {
            menuButton.textContent = "☰";
        }
    });


    /* Search filtering */

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const value =
                searchInput.value
                .toLowerCase()
                .trim();

            let found = false;

            searchItems.forEach(item => {

                const text =
                    item.textContent
                    .toLowerCase();

                if (
                    value === "" ||
                    text.includes(value)
                ) {
                    item.style.display = "block";
                    found = true;
                } else {
                    item.style.display = "none";
                }

            });

            if (noResult) {
                noResult.style.display =
                    found ? "none" : "block";
            }
        });
    }


    /* =================================================
       5 SLIDE BANNER
       AUTO RIGHT → LEFT
===================================================== */

    const slides = document.getElementById("slides");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const dotsContainer = document.getElementById("sliderDots");

    const totalSlides = 5;

    let currentSlide = 0;
    let sliderTimer = null;


    /* Create dots */

    if (dotsContainer) {

        dotsContainer.innerHTML = "";

        for (let i = 0; i < totalSlides; i++) {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.className = "slider-dot";

            dot.setAttribute(
                "aria-label",
                `Go to slide ${i + 1}`
            );

            dot.addEventListener("click", () => {

                currentSlide = i;

                updateSlider();
                restartSlider();

            });

            dotsContainer.appendChild(dot);
        }
    }


    function updateSlider() {

        if (!slides) return;

        /*
           5 slides = 20% each
           0 → 0%
           1 → -20%
           2 → -40%
           3 → -60%
           4 → -80%
        */

        slides.style.transform =
            `translateX(-${currentSlide * 20}%)`;


        const dots =
            document.querySelectorAll(".slider-dot");

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });
    }


    function nextSlide() {

        currentSlide++;

        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        updateSlider();
    }


    function previousSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }

        updateSlider();
    }


    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();
            restartSlider();

        });
    }


    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            previousSlide();
            restartSlider();

        });
    }


    function startSlider() {

        clearInterval(sliderTimer);

        /*
           5 seconds per slide
        */

        sliderTimer = setInterval(() => {

            nextSlide();

        }, 5000);
    }


    function restartSlider() {

        clearInterval(sliderTimer);

        startSlider();
    }


    /* Pause banner while mouse is over it */

    const bannerSlider =
        document.querySelector(".banner-slider");

    if (bannerSlider) {

        bannerSlider.addEventListener(
            "mouseenter",
            () => clearInterval(sliderTimer)
        );

        bannerSlider.addEventListener(
            "mouseleave",
            () => startSlider()
        );
    }


    /* =================================================
       MOBILE TOUCH SWIPE
    ================================================= */

    let touchStartX = 0;
    let touchEndX = 0;

    if (bannerSlider) {

        bannerSlider.addEventListener(
            "touchstart",
            (event) => {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        bannerSlider.addEventListener(
            "touchend",
            (event) => {

                touchEndX =
                    event.changedTouches[0].screenX;

                const distance =
                    touchStartX - touchEndX;


                /* Swipe left */

                if (distance > 50) {

                    nextSlide();
                    restartSlider();

                }


                /* Swipe right */

                else if (distance < -50) {

                    previousSlide();
                    restartSlider();

                }

            },
            { passive: true }
        );
    }


    /* Start slider */

    updateSlider();
    startSlider();



    /* =================================================
       WHATSAPP ORDER FORM
    ================================================= */

    const orderForm =
        document.getElementById("orderForm");


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const name =
                    document
                    .getElementById("name")
                    ?.value
                    .trim();


                const phone =
                    document
                    .getElementById("phone")
                    ?.value
                    .trim();


                const cake =
                    document
                    .getElementById("cake")
                    ?.value;


                const size =
                    document
                    .getElementById("size")
                    ?.value;


                const details =
                    document
                    .getElementById("details")
                    ?.value
                    .trim();


                /* Validation */

                if (!name) {

                    alert("Please enter your name.");

                    document
                        .getElementById("name")
                        ?.focus();

                    return;
                }


                if (!phone) {

                    alert("Please enter your phone number.");

                    document
                        .getElementById("phone")
                        ?.focus();

                    return;
                }


                if (!cake) {

                    alert("Please select a cake.");

                    document
                        .getElementById("cake")
                        ?.focus();

                    return;
                }


                /* WhatsApp message */

                let message =
                    `Hello Cakes Buddy! 🍰

New Cake Order

👤 Name: ${name}
📱 Phone: ${phone}
🎂 Cake: ${cake}
⚖️ Size: ${size}`;


                if (details) {

                    message +=
                        `

📝 Details: ${details}`;

                }


                message +=
                    `

Thank you! ❤️`;


                /*
                   Cakes Buddy WhatsApp
                   +880 1717-503093
                */

                const whatsappNumber =
                    "8801717503093";


                const whatsappURL =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener"
                );

            }
        );
    }



    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", (event) => {

                const id =
                    anchor.getAttribute("href");

                if (!id || id === "#") return;

                const target =
                    document.querySelector(id);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });



    /* =================================================
       HEADER SCROLL EFFECT
    ================================================= */

    const header =
        document.querySelector(".site-header");


    window.addEventListener(
        "scroll",
        () => {

            if (!header) return;

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 5px 25px rgba(60,30,20,.08)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        },
        { passive: true }
    );



    /* =================================================
       IMAGE FALLBACK
    ================================================= */

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.addEventListener("error", () => {

                img.style.opacity = "0.3";

            });

        });



    /* =================================================
       ESC KEY
    ================================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (searchDropdown) {
                searchDropdown.classList.remove("show");
            }

            if (mobileMenu) {
                mobileMenu.classList.remove("show");
            }

            if (menuButton) {
                menuButton.textContent = "☰";
            }
        }

    });

});
