/* =====================================================
   CAKES BUDDY - MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("show");

            if (mobileMenu.classList.contains("show")) {
                menuButton.innerHTML = "✕";
            } else {
                menuButton.innerHTML = "☰";
            }

        });


        /* Close mobile menu after clicking a link */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("show");

                menuButton.innerHTML = "☰";

            });

        });

    }



    /* =================================================
       SEARCH DROPDOWN
    ================================================= */

    const searchButton =
        document.getElementById("searchButton");

    const searchDropdown =
        document.getElementById("searchDropdown");

    const cakeSearchInput =
        document.getElementById("cakeSearchInput");

    const searchItems =
        document.querySelectorAll(".search-item");

    const noResult =
        document.getElementById("noResult");


    if (searchButton && searchDropdown) {

        searchButton.addEventListener("click", function (event) {

            event.stopPropagation();

            searchDropdown.classList.toggle("show");

            if (searchDropdown.classList.contains("show")) {

                setTimeout(function () {

                    if (cakeSearchInput) {
                        cakeSearchInput.focus();
                    }

                }, 100);

            }

        });


        /* Don't close when clicking inside search */

        searchDropdown.addEventListener("click", function (event) {

            event.stopPropagation();

        });

    }


    /* Close search when clicking outside */

    document.addEventListener("click", function () {

        if (searchDropdown) {
            searchDropdown.classList.remove("show");
        }

    });



    /* =================================================
       SEARCH CAKES
    ================================================= */

    if (cakeSearchInput) {

        cakeSearchInput.addEventListener(
            "input",
            function () {

                const searchText =
                    cakeSearchInput.value
                    .toLowerCase()
                    .trim();

                let found = false;


                searchItems.forEach(function (item) {

                    const itemText =
                        item.textContent.toLowerCase();


                    if (
                        searchText === "" ||
                        itemText.includes(searchText)
                    ) {

                        item.style.display = "block";

                        found = true;

                    } else {

                        item.style.display = "none";

                    }

                });


                if (noResult) {

                    if (found) {
                        noResult.style.display = "none";
                    } else {
                        noResult.style.display = "block";
                    }

                }

            }
        );

    }



    /* =================================================
       AD BANNER SLIDER
       5 SLIDES
       RIGHT TO LEFT
    ================================================= */

    const slides =
        document.getElementById("slides");

    const prevButton =
        document.getElementById("prevBtn");

    const nextButton =
        document.getElementById("nextBtn");

    const dotsContainer =
        document.getElementById("sliderDots");


    let currentSlide = 0;

    const totalSlides = 5;

    let autoSlide;


    /* Create dots */

    if (dotsContainer) {

        for (let i = 0; i < totalSlides; i++) {

            const dot =
                document.createElement("button");

            dot.className = "slider-dot";

            dot.type = "button";

            dot.setAttribute(
                "aria-label",
                "Go to slide " + (i + 1)
            );


            dot.addEventListener("click", function () {

                currentSlide = i;

                updateSlider();

                restartAutoSlide();

            });


            dotsContainer.appendChild(dot);

        }

    }


    function updateSlider() {

        if (!slides) return;


        /*
         * 20% = one slide
         * Positive slide number moves
         * the banner from right to left.
         */

        slides.style.transform =
            "translateX(-" +
            (currentSlide * 20) +
            "%)";


        const dots =
            document.querySelectorAll(".slider-dot");


        dots.forEach(function (dot, index) {

            if (index === currentSlide) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

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


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                nextSlide();

                restartAutoSlide();

            }
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            function () {

                previousSlide();

                restartAutoSlide();

            }
        );

    }


    /* Auto slide */

    function startAutoSlide() {

        autoSlide =
            setInterval(
                nextSlide,
                5000
            );

    }


    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* Pause when mouse is over banner */

    const bannerSlider =
        document.querySelector(".banner-slider");


    if (bannerSlider) {

        bannerSlider.addEventListener(
            "mouseenter",
            function () {

                clearInterval(autoSlide);

            }
        );


        bannerSlider.addEventListener(
            "mouseleave",
            function () {

                restartAutoSlide();

            }
        );

    }


    /* Touch swipe support */

    let touchStartX = 0;
    let touchEndX = 0;


    if (bannerSlider) {

        bannerSlider.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        bannerSlider.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0].screenX;


                const swipeDistance =
                    touchStartX - touchEndX;


                if (Math.abs(swipeDistance) > 50) {

                    if (swipeDistance > 0) {

                        nextSlide();

                    } else {

                        previousSlide();

                    }

                    restartAutoSlide();

                }

            },
            { passive: true }
        );

    }


    /* Start slider */

    updateSlider();

    startAutoSlide();



    /* =================================================
       ORDER FORM → WHATSAPP
    ================================================= */

    const orderForm =
        document.getElementById("orderForm");


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();


                const phone =
                    document.getElementById("phone").value.trim();


                const cake =
                    document.getElementById("cake").value;


                const size =
                    document.getElementById("size").value;


                const details =
                    document.getElementById("details").value.trim();


                if (!name) {

                    alert("Please enter your name.");

                    document
                        .getElementById("name")
                        .focus();

                    return;

                }


                if (!phone) {

                    alert("Please enter your phone number.");

                    document
                        .getElementById("phone")
                        .focus();

                    return;

                }


                if (!cake) {

                    alert("Please select a cake.");

                    document
                        .getElementById("cake")
                        .focus();

                    return;

                }


                let message =
                    "Hello Cakes Buddy! 🍰%0A%0A" +

                    "*New Cake Order*%0A%0A" +

                    "👤 Name: " +
                    encodeURIComponent(name) +

                    "%0A📱 Phone: " +
                    encodeURIComponent(phone) +

                    "%0A🎂 Cake: " +
                    encodeURIComponent(cake) +

                    "%0A⚖️ Size: " +
                    encodeURIComponent(size);


                if (details) {

                    message +=
                        "%0A📝 Details: " +
                        encodeURIComponent(details);

                }


                message +=
                    "%0A%0AThank you! ❤️";


                /*
                 * Cakes Buddy WhatsApp number
                 * +880 1717-503093
                 */

                const whatsappURL =
                    "https://wa.me/8801717503093?text=" +
                    message;


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }



    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    const allAnchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    allAnchors.forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetID =
                    anchor.getAttribute("href");


                if (
                    targetID &&
                    targetID !== "#"
                ) {

                    const target =
                        document.querySelector(targetID);


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });



    /* =================================================
       HEADER SHADOW ON SCROLL
    ================================================= */

    const header =
        document.querySelector(".site-header");


    window.addEventListener(
        "scroll",
        function () {

            if (!header) return;


            if (window.scrollY > 20) {

                header.style.boxShadow =
                    "0 5px 20px rgba(60,30,20,.08)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        },
        { passive: true }
    );



    /* =================================================
       IMAGE ERROR HANDLING
    ================================================= */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.style.background =
                    "#fff0f3";

                image.style.objectFit =
                    "contain";

            }
        );

    });


});
