import debug from 'debug';
debug('COMP229MIDTERM-301020458');

import http from 'http';

// import the app 
import app from './config/app.js';

const PORT = normalizePort(process.env.PORT || 4000);
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);


// HELPER FUNCTIONS
function normalizePort(val){
    let port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port
    }

    return false;
}

function onError(){
    if(error.syscall !== 'listen'){
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code){
        case 'EACCESS':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(){
    let addr = server.address();
    let bind = 'pipe ' + addr;
    debug('Listening on ' + bind);
    console.log('Application Started Successfully');
}