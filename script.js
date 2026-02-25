const ui = {
    passwordInput: document.getElementById("userPassword"),
    togglePasswordBtn: document.querySelector(".mostrar-senha"),

    menuToggleBtn: document.querySelector(".cabecalho__toggle"),
    menuOverlay: document.querySelector(".menu-lateral"),
    menuCloseBtn: document.querySelector(".menu-lateral__fechar"),
};

function togglePassword() {
    if (!ui.passwordInput) return;

    const isHidden = ui.passwordInput.type === "password";

    ui.passwordInput.type = isHidden ? "text" : "password";
    ui.togglePasswordBtn.textContent = isHidden ? "🙈" : "👁";
}

function openMenu() {
    if (!ui.menuOverlay) return;

    ui.menuOverlay.classList.add("ativo");
    ui.menuToggleBtn ? .setAttribute("aria-expanded", "true");
    ui.menuOverlay.setAttribute("aria-hidden", "false");
}

function closeMenu() {
    if (!ui.menuOverlay) return;

    ui.menuOverlay.classList.remove("ativo");
    ui.menuToggleBtn ? .setAttribute("aria-expanded", "false");
    ui.menuOverlay.setAttribute("aria-hidden", "true");
}


function initEvents() {
    ui.togglePasswordBtn ? .addEventListener("click", togglePassword);

    ui.menuToggleBtn ? .addEventListener("click", openMenu);
    ui.menuCloseBtn ? .addEventListener("click", closeMenu);


    ui.menuOverlay ? .addEventListener("click", (e) => {
        if (e.target === ui.menuOverlay) closeMenu();
    });


    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
}


initEvents();