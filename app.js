const burger = document.getElementById("that-burger");
const mobileMenu = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-bt");

burger.addEventListener("click", showMenu);

function showMenu() {
    mobileMenu.style.display = "block";
    closeButton.style.display = "block";
    burger.style.display = "none";
}

const work = document.getElementById("work");
const blog = document.getElementById("blog");
const account = document.getElementById("account");
const view = document.getElementById("view");

work.addEventListener("click", hideMenu);
blog.addEventListener("click", hideMenu);
account.addEventListener("click", hideMenu);
view.addEventListener("click", hideMenu);
closeButton.addEventListener("click", hideMenu);

function hideMenu() {
    mobileMenu.style.display = "none";
    burger.style.display = "block";
    closeButton.style.display = "none";

}