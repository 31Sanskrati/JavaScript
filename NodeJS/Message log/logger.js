const EventEmitter = require('events');
const uuid = require('uuid'); //generate id

class Logger extends EventEmitter {
    log(msg) {
        //call event
        this.emit('message', {id : uuid.v4(), msg});
    }
}

module.exports = Logger;