let body = document.querySelector("body");
let colorHexadecimal = document.getElementById("color");
const botonCambio = document.getElementById("cambiar-color");

botonCambio.addEventListener("click", () => {
    
    const parametros = "0123456789ABCDEF";
    let color = "#"

    for (let i = 0; i < 6; i++) {
        let aletorizador = Math.floor(Math.random() * 16);
        color += parametros[aletorizador]; 
    }
    colorHexadecimal.textContent = color;
    body.style.backgroundColor = color;

})