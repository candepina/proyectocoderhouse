document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector("#burguerIcon");
    const menu = document.querySelector("#navsanjovr");
    const cerrarMenuBtn = document.getElementById("cerrarMenu");

    icon.addEventListener("click", () => {
        menu.classList.toggle("mostrar");
    });

    cerrarMenuBtn.addEventListener('click', () => {
        menu.classList.remove('mostrar');
    });

    const enlacesMenu = menu.querySelectorAll('ul.navLinks li a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menu.classList.remove('mostrar');
        });
    });
});
