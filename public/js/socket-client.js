//referencias del html
const lblOnline = document.getElementById("lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();
socket.on("connect", () => {
  //console.log("conectado");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});
socket.on("disconnect", () => {
  //console.log("desconectado");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});
socket.on('enviar-mensaje',(payload)=>{
    console.log(payload)
})
btnEnviar.addEventListener('click',(e)=>{
    const mensaje = txtMensaje.value;
    const payload ={
        mensaje,
        id:'1234afg',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje',payload,(id)=>{
        console.log('desde el server',id)
    });
})
