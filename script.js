function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    navigation.classList.toggle("show");

}


/* Close mobile menu after selecting a page */

document.querySelectorAll("#navigation a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navigation")
            .classList
            .remove("show");

    });

});
