import { translations } from "./translations.js";

const form = document.querySelector("#contact-form-container form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Formulario enviado");
    alert("Formulario enviado");
});

const menuBtn = document.querySelector("#mobile-menu");
const navbar = document.querySelector("#navbar-options");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
});

const enBtn = document.querySelector("#btn-en");
const esBtn = document.querySelector("#btn-es");

function setLanguage(language) {

    const textElements = document.querySelectorAll("[data-i18n]");

    textElements.forEach(element => {

        const key = element.dataset.i18n;
        const translation = translations[language][key];        

        if (translation) {
            element.textContent = translation;
        }

    })

}

enBtn.addEventListener("click", () => {
    setLanguage("en_US");
});

esBtn.addEventListener("click", () => {
    setLanguage("es_419");
});