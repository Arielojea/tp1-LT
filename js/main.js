const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");

if (document.body.classList.contains("oscuro")) {
    boton.textContent = "☀️";
} else {
    boton.textContent = "🌙";
}
});