/* =====================================================
   CAKES BUDDY
   COMPLETE SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       1. MOBILE MENU
    ================================================= */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

            if (mobileMenu.classList.contains("active")) {

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

                mobileMenu.classList.remove("active");

                menuButton.innerHTML = "☰";

            });

        });

    }



    /* =================================================
       2. SEARCH DROPDOWN
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

        /* Open / close search */

        searchButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                searchDropdown.classList.toggle("active");

                if (
                    searchDropdown.classList.contains(
                        "active"
                    )
                ) {

                    setTimeout(function () {

                        if (cakeSearchInput) {
                            cakeSearchInput.focus();
                        }

                    }, 100);

                }

            }
        );


        /* Prevent dropdown click from closing */

        searchDropdown.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );


        /* Search filter */

        if (cakeSearchInput) {

            cakeSearchInput.addEventListener(
                "input",
                function () {

                    const searchText =
                        cakeSearchInput.value
                            .toLowerCase()
                            .trim();

                    let found = false;


                    searchItems.forEach(
                        function (item) {

                            const text =
                                item.textContent
                                    .toLowerCase();

                            if (
                                text.includes(
                                    searchText
                                )
                            ) {

                                item.style.display =
                                    "flex";

                                found = true;

                            } else {

                                item.style.display =
                                    "none";

                            }

                        }
                    );


                    if (noResult) {

                        if (!found) {

                            noResult.style.display =
                                "block";

                        } else {

                            noResult.style.display =
                                "none";

                        }

                    }

                }
            );

        }


        /* Close search when clicking outside */

        document.addEventListener(
            "click",
            function () {

                searchDropdown.classList.remove(
                    "active"
                );

            }
        );


        /* Close after selecting search result */

        searchItems.forEach(
            function (item) {

                item.addEventListener(
                    "click",
                    function () {

                        searchDropdown.classList.remove(
                            "active"
                        );

                    }
                );

            }
        );

    }



    /* =================================================
       3. BANNER SLIDER
    ================================================= */

    const slides =
        document.querySelector(".slides");

    const slideItems =
        document.querySelectorAll(".slide");

    const nextBtn =
        document.getElementById("nextBtn");

    const prevBtn =
        document.getElementById("prevBtn");

    const dotsContainer =
        document.getElementById("sliderDots");


    /* Stop if slider doesn't exist */

    if (
        !slides ||
        slideItems.length === 0
    ) {

        return;

    }


    const totalSlides =
        slideItems.length;


    let currentSlide = 0;

    let autoSlide;


    /* =================================================
       CREATE DOTS
    ================================================= */

    if (dotsContainer) {

        dotsContainer.innerHTML = "";


        for (
            let i = 0;
            i < totalSlides;
            i++
        ) {

            const dot =
                document.createElement("button");


            dot.className =
                "slider-dot";


            dot.type =
                "button";


            dot.setAttribute(
                "aria-label",
                "Go to banner " + (i + 1)
            );


            dot.addEventListener(
                "click",
                function () {

                    currentSlide = i;

                    updateSlider();

                    resetAutoSlide();

                }
            );


            dotsContainer.appendChild(dot);

        }

    }


    const dots =
        document.querySelectorAll(
            ".slider-dot"
        );



    /* =================================================
       UPDATE SLIDER
    ================================================= */

    function updateSlider() {


        /*
           Each slide = 20%
           because there are 5 banners
        */

        const percentage =
            (currentSlide * 100) /
            totalSlides;


        slides.style.transform =
            "translateX(-" +
            percentage +
            "%)";


        /* Update dots */

        dots.forEach(
            function (dot, index) {

                dot.classList.toggle(
                    "active",
                    index === currentSlide
                );

            }
        );

    }



    /* =================================================
       NEXT SLIDE
    ================================================= */

    function nextSlide() {

        currentSlide++;


        if (
            currentSlide >= totalSlides
        ) {

            currentSlide = 0;

        }


        updateSlider();

    }



    /* =================================================
       PREVIOUS SLIDE
    ================================================= */

    function previousSlide() {

        currentSlide--;


        if (currentSlide < 0) {

            currentSlide =
                totalSlides - 1;

        }


        updateSlider();

    }



    /* =================================================
       NEXT BUTTON
    ================================================= */

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                nextSlide();

                resetAutoSlide();

            }
        );

    }



    /* =================================================
       PREVIOUS BUTTON
    ================================================= */

    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            function () {

                previousSlide();

                resetAutoSlide();

            }
        );

    }



    /* =================================================
       AUTO SLIDE
    ================================================= */

    function startAutoSlide() {

        autoSlide =
            setInterval(
                function () {

                    nextSlide();

                },
                4000
            );

    }


    function resetAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* Start slider */

    updateSlider();

    startAutoSlide();



    /* =================================================
       PAUSE WHEN MOUSE IS OVER BANNER
    ================================================= */

    const bannerSlider =
        document.querySelector(
            ".banner-slider"
        );


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

                startAutoSlide();

            }
        );

    }



    /* =================================================
       4. MOBILE TOUCH / SWIPE
    ================================================= */

    let touchStartX = 0;

    let touchEndX = 0;


    if (bannerSlider) {

        bannerSlider.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

                clearInterval(autoSlide);

            },
            {
                passive: true
            }
        );


        bannerSlider.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0].screenX;


                handleSwipe();

                startAutoSlide();

            },
            {
                passive: true
            }
        );

    }


    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;


        /*
           Swipe left
           = next banner
        */

        if (swipeDistance < -50) {

            nextSlide();

        }


        /*
           Swipe right
           = previous banner
        */

        if (swipeDistance > 50) {

            previousSlide();

        }

    }



    /* =================================================
       5. ORDER FORM → WHATSAPP
    ================================================= */

    const orderForm =
        document.getElementById(
            "orderForm"
        );


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    )?.value.trim() || "";


                const phone =
                    document.getElementById(
                        "phone"
                    )?.value.trim() || "";


                const cake =
                    document.getElementById(
                        "cake"
                    )?.value || "";


                const size =
                    document.getElementById(
                        "size"
                    )?.value || "";


                const details =
                    document.getElementById(
                        "details"
                    )?.value.trim() || "";


                /* Basic validation */

                if (!name) {

                    alert(
                        "Please enter your name."
                    );

                    document.getElementById(
                        "name"
                    )?.focus();

                    return;

                }


                if (!phone) {

                    alert(
                        "Please enter your phone number."
                    );

                    document.getElementById(
                        "phone"
                    )?.focus();

                    return;

                }


                if (!cake) {

                    alert(
                        "Please select a cake."
                    );

                    document.getElementById(
                        "cake"
                    )?.focus();

                    return;

                }


                /* WhatsApp message */

                const message =
`Hello Cakes Buddy! 🍰

I want to order a cake.

👤 Name: ${name}

📱 Phone: ${phone}

🎂 Cake: ${cake}

⚖️ Size: ${size}

📝 Details:
${details || "No extra details"}

Thank you! ❤️`;


                /*
                   Your WhatsApp number
                */

                const whatsappNumber =
                    "8801717503093";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                /* Open WhatsApp */

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }



    /* =================================================
       6. WHATSAPP CHANNEL LINKS
    ================================================= */

    const channelURL =
        "https://whatsapp.com/channel/0029VbD6LlH6RGJJ1QsBN93x";


    const channelLinks =
        document.querySelectorAll(
            'a[href*="whatsapp.com/channel"]'
        );


    channelLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    link.href =
                        channelURL;

                }
            );

        }
    );



    /* =================================================
       7. HEADER SCROLL EFFECT
    ================================================= */

    const header =
        document.querySelector("header");


    if (header) {

        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 30
                ) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }

            }
        );

    }



    /* =================================================
       8. CLOSE SEARCH WITH ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (searchDropdown) {

                    searchDropdown.classList.remove(
                        "active"
                    );

                }


                if (
                    mobileMenu &&
                    mobileMenu.classList.contains(
                        "active"
                    )
                ) {

                    mobileMenu.classList.remove(
                        "active"
                    );


                    if (menuButton) {

                        menuButton.innerHTML =
                            "☰";

                    }

                }

            }

        }
    );



    /* =================================================
       9. SMOOTH NAVIGATION
    ================================================= */

    const allAnchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    allAnchors.forEach(
        function (anchor) {

            anchor.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        anchor.getAttribute(
                            "href"
                        );


                    if (
                        !targetID ||
                        targetID === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        }
    );



    /* =================================================
       10. IMAGE ERROR HANDLER
    ================================================= */

    const allImages =
        document.querySelectorAll(
            "img"
        );


    allImages.forEach(
        function (image) {

            image.addEventListener(
                "error",
                function () {

                    /*
                       Hide broken image instead
                       of showing ugly broken icon.
                    */

                    image.style.opacity =
                        "0";

                }
            );

        }
    );


});
