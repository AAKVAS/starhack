$(function () {
    $("#menu").load("../html_components/menu.html");
});

function showMenu() {
    document.getElementById("menu").classList.toggle("show");
}