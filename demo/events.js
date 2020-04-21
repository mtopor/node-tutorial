const EventEmitter = require('events');

// const emitter = new EventEmitter();
//
// emitter.on('anything', data => {
//     console.log('On anything: ', data);
// });
//
// emitter.emit('anything', {a: 1});
//
// setTimeout(() => {
//     emitter.emit('anything', {b: 3});
// }, 1500);

class Dispatcher extends EventEmitter {
    subscribe(eventName, callback) {
        console.log('[Subscribe...]');
        this.on(eventName, callback);
    }

    dispatch (eventName, data) {
        console.log('[Dispatch...]');
        this.emit(eventName, data);
    }
}

const dis = new Dispatcher();
dis.subscribe('myEvent', data => {
    console.log('on myEvent: ', data);
});

dis.dispatch('myEvent', {abc: 123});