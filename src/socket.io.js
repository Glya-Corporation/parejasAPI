const { UserServices, RelationServices, LikeListServices, DontLikeListServices } = require('./services');

module.exports = io => {
  io.on('connection', socket => {
    console.log('User connected to socket server');

    socket.on('login', data => {
      console.log(data, socket.id);
      UserServices.updateSocketId(data, socket.id);
    });

    /* Escuchamos el evento socket */

    socket.on('invitation', async data => {
      //Escribimos la logíca de la función
      const { socketId, result } = await RelationServices.createRelation(data);
      io.to(socketId).emit('invitationRecived', result);
      io.to(socket.id).emit('invitationRecived', result);
    });

    /* Escuchamos evento de agregar me gusta */

    socket.on('addILike', async data => {
      const result = await LikeListServices.createLikeList(data);

      if (result) {
        io.to(data.socketId).emit('likeAdded', { value: true });
        io.to(socket.id).emit('likeAdded', { value: true });
      }
    });

    socket.on('addIDontLike', async data => {
      const result = await DontLikeListServices.createDontLikeList(data);
      io.to(data.socketId).emit('dontLikeAdded', { value: true });
      io.to(socket.id).emit('dontLikeAdded', { value: true });
    });

    socket.on('deleteLike', async data => {
      const result = await LikeListServices.deleteLikeList(data.id);
      io.to(data.socketId).emit('likeAdded', { value: true });
      io.to(socket.id).emit('likeAdded', { value: true });
    });

    socket.on('deleteDontLike', async data => {
      const result = await DontLikeListServices.deleteDontLikeList(data.id);
      io.to(data.socketId).emit('dontLikeAdded', { value: true });
      io.to(socket.id).emit('dontLikeAdded', { value: true });
    });

    /* Emitir eventos */

    io.to(socket.id).emit('feedback', 'string o variable'); //Evento dirigído a un socket específico

    io.emit('feedback', 'string o variable'); //Evento dirigído a todos los sockets conectados al server

    socket.broadcast.emit('hello', 'string o variable'); //Evento dirigído a todos los sockets a esepción del emisor

    /* Recibimos el evento cuando el usuario cierra secion*/

    socket.on('disconnect', () => {
      console.log('User disconnected to socket server');
    });
  });
};
