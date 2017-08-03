// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

var users = [];

io.on('connection', function (socket) {

  console.log("connection made")


  // when the client emits 'new message', this listens and executes
  socket.on('identify',  (data) => {
    // we tell the client to execute 'new message'
    console.log("received", data)
    socket.broadcast.emit('identified', data);
    
    if(data.split("-")[0] === "controller") {

      users.push({key: data, username: socket.username});
      console.log("user added");
    }
  });


  // when the client emits 'new message', this listens and executes
  socket.on('key',  (data) => {
    // we tell the client to execute 'new message'
    console.log("received", data)
    socket.emit('move', data);
    socket.broadcast.emit('move', {
      username: socket.username,
      message: data
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {

    for(var i = 0; i < users.length; i++ ) {
      if(users[i].username === socket.username) {
        //socket.broadcast.emit('removed', users[i].key);
      }
    }
    console.log(users)

   });
});