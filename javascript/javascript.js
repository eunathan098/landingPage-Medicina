let isMenuOpen = false;

function openMenuMobile() {
    const menuMobile = document.getElementById("bg-container-menuMobile");
    const visibilyButton = document.getElementById("btn-fechar-menu-Mobile");

    if (visibilyButton) {
        visibilyButton.style.display = "block";
    }

    if (isMenuOpen) {
        menuMobile.classList.remove("open");
    } else {
        menuMobile.classList.add("open");
    }

    isMenuOpen = !isMenuOpen;
}

function fecharMenuMobile() {
    const menuMobile = document.getElementById("bg-container-menuMobile");
    const aparecaButao = document.getElementById("btn-fechar-menu-Mobile");
    const btnOpentoMenu = document.getElementById("icone-menu-lateral");

    if (menuMobile) {
        menuMobile.classList.remove("open");
        isMenuOpen = false;
    }

    // Esconde o botão de fechar
    if (aparecaButao) {
        aparecaButao.style.display = "none";
    }

    if (btnOpentoMenu) {
        btnOpentoMenu.style.display = "block";
    }
}