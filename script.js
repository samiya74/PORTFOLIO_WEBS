
// =========================
// NAVBAR SHADOW
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {
        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


// =========================
// PROJECT BUTTONS
// =========================

const projectButtons =
    document.querySelectorAll(".project-btn");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Project link will be added soon!");

        }

    });

});

