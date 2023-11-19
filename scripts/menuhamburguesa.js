document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector("#burguerIcon");
    const menu = document.querySelector("#burguerMenu");
   

    icon.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
    });
});
const cerrarMenuBtn = document.getElementById("cerrarMenu");

cerrarMenuBtn.addEventListener('click', () => {
    burguerMenu.classList.remove('mostrar');
});


const enlacesMenu = burguerMenu.querySelectorAll('ul.navLinks li a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        burguerMenu.classList.remove('mostrar');
    });
});