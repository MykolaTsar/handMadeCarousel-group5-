(function () {
    const changing = document.querySelector(".plus");
    changing.addEventListener("click", function (e) {
        changing.classList.toggle("active");
    });
    /* const changing = document.querySelector(".plus");
    changing.addEventListener("click", function (e) {
        changing.classList.toggle("active");
    }); */

/*     const navLinks = document.querySelectorAll(".header__menu-item");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (burgerButton.classList.contains("active")) {
                document.body.classList.remove("lock");
                burgerButton.classList.remove("active");
                navigationsBody.classList.remove("active");
            }
        }
        );
    }); */
})();