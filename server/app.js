const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const route = require('./router/index');

const app = express();
var port = normalizePort(process.env.PORT || '8989');

// 天天闯关
app.use('/openapi', proxy('http://127.0.0.1:9090', {
    proxyReqPathResolver: function(req) {
        console.log(require('url').parse(req.url).path);
        return '/openapi' + require('url').parse(req.url).path;
    }
}));

app.get('/live', function(req, res) {
    res.json({
        msg: 'ok'
    });
});

app.get('/', function(req, res) {
    res.send('hello');
});
/*

app.get('/!**!/!*.html', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/', route);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('应用实例，访问地址为 http://%s:%s', host === '::' ? 'localhost' : host, port);
});

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
    // named pipe
        return val;
    }

    if (port >= 0) {
    // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
}

// todo 未捕捉的异常处理
const uncaughtExceptionList = [];
process.on('uncaughtException', function(err) {
    console.log('uncaughtException', '未捕捉的异常处理', err);
    uncaughtExceptionList.push(1);
    if (uncaughtExceptionList.length >= 10) {
        setTimeout(function() {
            process.exit(0);
        }, 200);
    }
});
process.on('exit', function() {
    console.log('exit', '您的服务挂掉了');
});

module.exports = app;
