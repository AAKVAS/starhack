$(function () {
    $("#menu").load("../html_components/menu.html");
});

function showMenu(event) {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#menu') && !event.target.matches('#menu_button') && !event.target.matches('#menu_button_img')) {
        let dropdowns = document.getElementById("menu");
        dropdowns.classList.remove('show');
    }
}