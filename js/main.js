let icon = document.querySelector(".menu_icon");
let links = document.getElementById('smallLinks')
icon.addEventListener("click", () => {
    icon.classList.toggle("clicked");
});
function res_nav() {
    links.classList.toggle("small-links");
    // links.classList.remove("d-none");
}



