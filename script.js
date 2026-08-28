/* =========================================
   CAKES BUDDY - SCRIPT.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const enterButton = document.querySelector(".enter-btn");

    if (enterButton) {

        enterButton.addEventListener("click", function () {

            // Small click effect
            enterButton.style.transform = "scale(0.96)";

            setTimeout(function () {
                enterButton.style.transform = "";
            }, 150);

        });

    }

});
