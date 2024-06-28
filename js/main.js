const activeDropDowns = document.querySelectorAll(".activeNavbarVertical");
const navbarVerticals = document.querySelectorAll(".navbarVertical");
const menuBar = document.querySelector(".menuBurguer")
let navbarShow = document.querySelector(".contentNavbars")
const montion = document.querySelector(".montionBlur")
let arrowDown = document.querySelectorAll(".iconArrowDown")

// Función para cerrar todos los dropdowns y restablecer las flechas
function closeAllDropdowns() {
    navbarVerticals.forEach((navbar, index) => {
        navbar.style.display = "none";
        arrowDown[index].classList.remove("iconArrowUp");
        arrowDown[index].classList.add("iconArrowDown");
    });
}

// Agregar evento click a cada dropdown
activeDropDowns.forEach((dropdown, index) => {
    dropdown.addEventListener("click", function(event) {
        // Prevenir que el evento se propague al documento
        event.stopPropagation();

        // Alternar el display del dropdown correspondiente
        if (navbarVerticals[index].style.display === "flex") {
            navbarVerticals[index].style.display = "none";
            arrowDown[index].classList.remove("iconArrowUp")
            arrowDown[index].classList.add("iconArrowDown")
        } else {
            closeAllDropdowns();  // Cerrar todos los dropdowns antes de abrir el seleccionado
            navbarVerticals[index].style.display = "flex";
            arrowDown[index].classList.remove("iconArrowDown")
            arrowDown[index].classList.add("iconArrowUp")
        }
    });
});

// Agregar evento click al documento
document.addEventListener("click", function() {
    closeAllDropdowns();
});

menuBar.addEventListener("click", function(event){
    // Prevenir que el evento se propague al documento
    event.stopPropagation();
    
    if(!menuBar.classList.contains("menuBurguerClose")){
        menuBar.classList.add("menuBurguerClose")
        menuBar.classList.remove("menuBurguer")
        navbarShow.style.display = "flex"
        montion.style.display = "block"
    }else{
        menuBar.classList.add("menuBurguer")
        menuBar.classList.remove("menuBurguerClose")
        navbarShow.style.display = "none"
        montion.style.display = "none"
    }
});
