/* =========================
   Modo oscuro
   ========================= */
const boton = document.getElementById("btn-modo");
if (boton) {
  boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
      boton.textContent = "☀️";
    } else {
      boton.textContent = "🌙";
    }
  });
}

/* =========================
   Filtro de lugares
   ========================= */
const inputFiltro = document.getElementById("filtro");
const cantResultados = document.getElementById("cant-resultados");
const tarjetas = document.querySelectorAll(".tarjeta-lugar");

function actualizarFiltro() {
  if (!inputFiltro || !cantResultados || tarjetas.length === 0) return;

  const texto = inputFiltro.value.toLowerCase().trim();
  let visibles = 0;

  tarjetas.forEach((tarjeta) => {
    const contenido = tarjeta.textContent.toLowerCase();
    const coincide = contenido.includes(texto);

    if (coincide) {
      tarjeta.style.display = "";
      visibles++;
    } else {
      tarjeta.style.display = "none";
    }
  });

  cantResultados.textContent = `Mostrando ${visibles} de ${tarjetas.length} lugares`;
}

if (inputFiltro && cantResultados && tarjetas.length > 0) {
  actualizarFiltro();
  inputFiltro.addEventListener("input", actualizarFiltro);
}

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