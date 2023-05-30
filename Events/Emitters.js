const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (number) => {
  console.log("The Following event is emitted " + `${number}`);
});

eventEmitter.emit("start", 24);
