const burger = document.getElementById("that-burger");
const mobileMenu = document.getElementById("mobile-menu")

burger.addEventListener("click", showMenu);

function showMenu() {
    mobileMenu.style.display = "block"
}

const work = document.getElementById("work");
const blog = document.getElementById("blog");
const account = document.getElementById("account");
const view = document.getElementById("view");

work.addEventListener("click", hideMenu);
blog.addEventListener("click", hideMenu);
account.addEventListener("click", hideMenu);
view.addEventListener("click", hideMenu);

function hideMenu() {
    mobileMenu.style.display = "none"
}