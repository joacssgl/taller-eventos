const contenedor = document.querySelector("#contenedor");
contenedor.addEventListener("click", function () {
    alert("Hola! Soy el div!");
});

const boton = document.querySelector("button");
boton.addEventListener("click", (event) => {
    event.stopPropagation();
});