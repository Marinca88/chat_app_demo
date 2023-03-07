var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => res.send('Hellor'))

io.on('connection', (socket) => {
    console.log('Some user is connected');
})

http.listen(3000, () => {
    console.log('Listening on  port : 3000')
})