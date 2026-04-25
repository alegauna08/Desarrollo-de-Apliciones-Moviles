let user = document.getElementById("user");
let password = document.getElementById("password");
const usuarioguardado = { nombre: "AleGau", contraseña: "1234"};
const {nombre, contraseña} = usuarioguardado;

function validar() {
    if (user.value === nombre && password.value === contraseña) {
        window.location.href = "repaso2.html";
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }
}

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    validar();
});