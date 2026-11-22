/* =========================
   Modo oscuro
   ========================= */
const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");

if (document.body.classList.contains("oscuro")) {
    boton.textContent = "☀️";
} else {
    boton.textContent = "🌙";
}
});

/* =========================
   Formulario de contacto
   ========================= */
const form = document.getElementById("form-contacto");

if (form) {
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (form.checkValidity()) {
      resultado.className = "ok";
      resultado.textContent = "¡Consulta enviada correctamente!";
      form.reset();
    } else {
      resultado.className = "error";
      resultado.textContent = "Completá todos los campos correctamente.";
    }
  });
}