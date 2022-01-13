const EventEmitter = require('events');
//generates the random ids
//const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        //Call Event
        this.emit('message',{msg});
    }
}

module.exports=Logger;