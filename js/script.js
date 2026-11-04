document.addEventListener("DOMContentLoaded", function () {

    // Select the navigation button and navigation menu.
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav");

    // Function to close the mobile menu.
    function closeMenu() {

        if (!menuButton || !navigation) {
            return;
        }

        navigation.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";
    }

    // Mobile navigation functionality.
    if (menuButton && navigation) {

        // Open or close the menu when clicked.
        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.textContent = isOpen ? "✕" : "☰";

        });

        // Close the menu after clicking a navigation link.
        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });

        // Close the menu when Escape is pressed.
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                closeMenu();
            }

        });

        // Close the menu when clicking outside it.
        document.addEventListener("click", function (event) {

            if (
                navigation.classList.contains("open") &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                closeMenu();
            }

        });

        // Reset navigation when switching to desktop width.
        window.addEventListener("resize", function () {

            if (window.innerWidth > 620) {
                closeMenu();
            }

        });

    }

    // Automatically display the current year in the footer.
    const yearElements = document.querySelectorAll(".year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });

});