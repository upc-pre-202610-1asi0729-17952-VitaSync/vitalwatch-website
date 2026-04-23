const form = document.querySelector("#contact-form-container form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Formulario enviado");
    alert("Formulario enviado");
});