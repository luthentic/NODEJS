let events = require('events');
const { emit } = require('process');
let emitter = new events.EventEmitter()

let myEventHandler = () =>{
  console.log('I hear a scream');
}

emitter.on('scream',myEventHandler)

emitter.emit('scream')