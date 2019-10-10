var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
//escuchar
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
})

//enviar informacion
//solo para enviarsela al servidor
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola mundo socket'
}, function(resp) {
    console.log('respuesta server :', resp);
});
//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});