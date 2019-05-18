const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
window.addEventListener("load", redimensionar);
window.addEventListener("resize", redimensionar);
canvas.addEventListener("mousedown", activar);
window.addEventListener("mouseup", desactivar);

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