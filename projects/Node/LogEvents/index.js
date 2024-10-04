const EventEmitter = require('events');
const LogEvents = require('./LogEvents');

const myEmitter = new EventEmitter();

myEmitter.on('log', (message) => {
    LogEvents(message);
});


setTimeout(() => {
    myEmitter.emit('log', 'New log event emitted');
    console.log('New log event emitted');
}, 2000);
