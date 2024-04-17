const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('monday', () => {
  console.log('Go to college');
  setTimeout(()=>{
        console.log("Please go to college...otherwise attendance ni milegi!")
  },3000)// ye statement 3 second baad print hoga, ye baaki k code ko block ni krta

  
});
myEmitter.emit('monday');
console.log("event must be called!");
console.log("Goodbye!!")

//myEmitter.emit('monday');// event ko call krne k liye emit function ko use krte h