var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos la conexion con el servidor');
});
//los emmit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Saul',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

//escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});