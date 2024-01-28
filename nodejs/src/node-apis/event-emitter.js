import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("event", () => {
  console.log("an event occurred!");
});

emitter.on("event2", () => {
    console.log("an event 2 occurred!");
  });

  
emitter.emit("event");

const count = emitter.listeners("event2"); // returns an array of listeners
console.log(count.toString());
// arguments ??

// processes

process.stdout.write("Hello \n");
