
let isMenuOpen = false;

function openMenuMobile() {
    const menuMobile = document.getElementById("bg-container-menuMobile");
    
    if (isMenuOpen) {
        // Adiciona a classe que fecha o menu
        menuMobile.classList.remove("open");
    } else {
        // Adiciona a classe que abre o menu
        menuMobile.classList.add("open");
    }

    isMenuOpen = !isMenuOpen;
}
