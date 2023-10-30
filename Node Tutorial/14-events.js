const Emitter = require('events')
const customEmitter = new Emitter()

customEmitter.on('resp',()=>{
    console.log('Data has been sent.');
})

customEmitter.on('req',()=>{
    console.log('The data received by the faction to perform task in a well manner.');
})
customEmitter.on('dataRequest',()=>{
    console.log('The data received received by the faction to perform task in a well manner.');
})

customEmitter.emit('resp');
customEmitter.emit('dataRequest');
customEmitter.emit('req');
