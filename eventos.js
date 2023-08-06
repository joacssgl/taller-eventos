const boton = document.querySelector("#boton");
boton.addEventListener("click", function() {
    alert("Hola! Soy el div!");
});

const btn = document.querySelector(".boton");
btn.removeEventListener("click", function() {
    alert("Hola! Soy el div!");
});