const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x_inicial, y_inicial;
window.addEventListener("load", redimensionar);
window.addEventListener("resize", redimensionar);
canvas.addEventListener("mousedown", activar);
window.addEventListener("mouseup", desactivar);
canvas.addEventListener("touchmove", movil);

function redimensionar(){
    const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    canvas.width = w-100;
    canvas.height = h-150;
}

function activar(){
    canvas.addEventListener("mousemove", dibujar);
}

function desactivar(){
    canvas.removeEventListener("mousemove", dibujar);
}

function dibujar(e){
    ctx.beginPath();
    ctx.moveTo(e.layerX, e.layerY);
    ctx.lineTo(e.layerX+e.movementX, e.layerY+e.movementY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}

function movil(e) {
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(x_inicial, y_inicial);
    ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
    x_inicial = e.changedTouches[0].clientX;
    y_inicial = e.changedTouches[0].clientY;
}