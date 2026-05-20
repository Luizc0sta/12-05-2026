const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Formulário enviado!");
});

const elementoCor = document.getElementById("corFavorita");

elementoCor.addEventListener("input", (e) => {
    let corNova = e.target.value;

    document.documentElement.style.setProperty(
        "--primary-color",
        corNova
    );
});