const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require('dotenv');
const Mongoose = require('./config/mongoose');
const MongoDB = require('./config/mongodb');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
const io = require('socket.io');
const store = require('./store');
const http = require('http');
const { socketIds } = require("./store");

dotenv.config();

//Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(fileUpload());
if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
//Connect to mongodb
var mongo = MongoDB();
var mongoose = Mongoose();


//Routes
require('./routes/Admin.routes')(app);
require('./routes/Auth.routes')(app);
require('./routes/User.routes')(app);
require('./routes/Job.routes')(app);
require('./routes/Payment.routes')(app);
// require('./routes/PageLink.routes')(app);
// require('./routes/ShortCut.routes')(app);
// require('./routes/Activity.routes')(app);
// require('./routes/FileUpload.routes')(app);
// require('./routes/Ledger.routes')(app);

const server = http.createServer(app);
store.app = app;
// store.config = Config;
store.io = io(server);

const port = process.env.PORT || 5000;  //process.env.port is Heroku's port if you choose to deplay the app there
// app.listen(port, () => console.log("Server up and running on port " + port));
const listen = () => server.listen(port, () => console.log(`Server listening on port ${port}`));
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('Specified port unavailable, retrying in 10 seconds...'.red);
        setTimeout(() => {
            server.close();
            server.listen(port);
        }, 10000);
    }
});
listen();
// store.io.on('connection', (socket) => {
//     console.log(`connection establised via id: ${socket.id}`);
//     socket.on('online', () => {
//         console.log('A new user has joined the chat');
//         store.io.sockets.emit('joined',{
//             'success':true,
//         });
//     });
//     socket.on('chat', (data) => {
//         console.log('chat',data);
//         store.io.sockets.emit('chat', {dfd:'asdsa'});
//     });
//     socket.on('addRoom', (data) => {
//         console.log('chat',data);
     
//         store.io.sockets.emit('addRoom',data)
//         // store.io.sockets.emit('chat', {dfd:'asdsa'});
//     });

//     socket.on('typing', (data) => {
//         console.log('typing',data);
//         socket.broadcast.emit('typing',data);
//     });
//     socket.on('no_typing', (data) => {
//         console.log('no_typing',data);
//         socket.broadcast.emit('no_typing',data);
//     });
// })
