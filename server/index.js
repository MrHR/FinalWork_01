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
var games = [];

io.on('connection', function (socket) {

  console.log("connection made");


  // when the client emits 'new message', this listens and executes
  socket.on('startGame',  (data) => {
    // we tell the client to execute 'new message'

    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    console.log({ payload: text })
    //add gamecode
    var newGame = {
      id: text,
      users: [],
      room: null
    }
    games.push(newGame)
<<<<<<< HEAD

    console.log("games", games);

    socket.emit('gamecode', { payload: newGame });
 
  });

  socket.on('addUser',  (data) => {
    // we tell the client to execute 'new message'
    console.log(data)

    for(let i = 0; i < games.length; i++ ){
      if( games[i].id === data.payload && games[i].users.indexOf( data.id ) == -1) {
        console.log("emitted", data);
        socket.broadcast.emit('userjoined', { joined: data });
        games[i].users.push(data.id);
      }
    }
    console.log(games);
  });

=======

    console.log("games", games);

    socket.emit('gamecode', { payload: newGame });
 
  });

  socket.on('addUser',  (data) => {
    // we tell the client to execute 'new message'
    console.log(data)

    for(let i = 0; i < games.length; i++ ){
      if( games[i].id === data.payload && games[i].users.indexOf( data.id ) == -1) {
        console.log("emitted", data);
        socket.broadcast.emit('userjoined', { joined: data });
        games[i].users.push(data.id);
      }
    }
    console.log(games);
  });

>>>>>>> e97d30ee8e55d400ace03a6ff472b3d167d98b9d

  // when the client emits 'new key message', this listens and executes
  socket.on('key',  (data) => {
    // we tell the client to execute 'new message'
    console.log("received key", data);

    socket.broadcast.emit('move', {
      username: socket.username,
      message: data
    });
    
  });

  //when the controller accepted an action
  socket.on('actionCall', (data) => {
    console.log('recieved actioncall', data);
  });

<<<<<<< HEAD
  //when the controller accepted an action
  socket.on('puzzleDone', (data) => {
    console.log('recieved actioncall', data);
    socket.broadcast.emit("gameDone", data.payload)
  });
  
  //gameOver
  
  socket.on('gameOver', (data) => {
    console.log('recieved gameOver', data);
    socket.broadcast.emit("gameDone", data.payload)
  });
  
=======

>>>>>>> e97d30ee8e55d400ace03a6ff472b3d167d98b9d
  //when the controller accepted an action
  socket.on('startgame', (data) => {
    console.log('recieved startGame', data);
    socket.broadcast.emit("startgame", data.payload)
  });

  //when the board emits message to controller
  socket.on('msgData', (data) => {
    console.log('recieved message data', data);

    socket.broadcast.emit('message', {
      data: data
    });

  });


  // when the user disconnects.. perform this
  socket.on('disconnect', function () {

    for(var i = 0; i < users.length; i++ ) {
      if(users[i].username === socket.username) {
        //socket.broadcast.emit('removed', users[i].key);
      }
    }
    
    console.log(users);
   });
});