// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

mobileMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function showDescription(pack) {
    const descriptions = {
        Beginner: "Get Free access to Basic features of InteractX",
        Plus: "The Plus Pack comes with upto 10 customized modules per child based on group caregiver inputs",
        Pro: "The Pro Pack comes with upto 25 customized modules per child designed based on Doctor's Recommendations"
    };

    const descriptionBox = document.getElementById("description");
    descriptionBox.textContent = descriptions[pack];
    descriptionBox.style.display = "block";
}
