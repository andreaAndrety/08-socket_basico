const { io } = require('../server')


io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a la aplicacion'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callBack) => {
        console.log(data);
        //enviar un mensjae a todos los clientes
        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })

        // if (mensaje.usuario) {
        //     callBack({
        //         resp: 'todo salio bien con el usuario'
        //     });
        // } else {
        //     callBack({
        //         resp: 'hubo un problema con el usuario '
        //     });

        // }

    })

});